import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Delete,
  Post,
  Res,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './schemas/note.schema';
import noteSchema from './validators/noteSchema';
import dateParser from './validators/dateParser';
import { Response } from 'express';
import { NOTE_MESSAGES } from './constants/notes.constants';


@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) { }

  @Get('/stats')
  async stats(@Res() response: Response) {
    const stats = await this.noteService.stats();
    return response.status(HttpStatus.OK).json({
      stats,
    });
  }

  @Get()
  async getAll(@Res() response: Response) {
    const notes = await this.noteService.getAll();
    return response.status(HttpStatus.OK).json({
      notes,
    });
  }

  @Get('/:id')
  async getById(@Res() response: Response, @Param('id') id) {
    const note = await this.noteService.getById(id);
    return response.status(HttpStatus.OK).json({
      note,
    });
  }

  @Post()
  async create(@Res() response: Response, @Body() note: Note) {
    const validatedNote = await noteSchema.validate({
      ...note,
      dates: undefined,
      ...(note.content && { dates: dateParser(note.content) }),
    });
    const createdNote = await this.noteService.create(
      validatedNote as Note,
    );
    return response.status(HttpStatus.CREATED).json({
      note: createdNote,
    });
  }

  @Patch('/:id')
  async update(@Res() response: Response, @Param('id') id, @Body() note: Note) {
    const validatedNote = await noteSchema.validate({
      ...note,
      dates: undefined,
      ...(note.content && { dates: dateParser(note.content) }),
    });
    const { affectedRows, updatedNoteData } = await this.noteService.update(
      id,
      validatedNote as Note,
    );
    if (!affectedRows) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: NOTE_MESSAGES.ERRORS.NOT_FOUND,
      });
    }
    return response.status(HttpStatus.OK).json({
      note: updatedNoteData,
    });
  }

  @Delete('/:id')
  async delete(@Res() response: Response, @Param('id') id) {
    const note = await this.noteService.getById(id);
    if (!note) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: NOTE_MESSAGES.ERRORS.NOT_FOUND,
      });
    }
    await this.noteService.delete(id);
    return response.status(HttpStatus.OK).json({
      message: NOTE_MESSAGES.SUCCESS.DELETED,
    });
  }
}
