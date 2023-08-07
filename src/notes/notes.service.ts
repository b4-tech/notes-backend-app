import { CreateNoteDto } from "./dto/create-note.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Note, NoteDocument } from "./schemas/note.schema";
import { Model } from "mongoose";
import { UpdateNoteDto } from "./dto/update-note.dto";

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) { }

  async getAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async stats(): Promise<Array<Object>> {
    return this.noteModel.aggregate([{ $count: "number_of_notes" }]);
  }

  async getById(id: string): Promise<Note> {
    return this.noteModel.findById(id);
  }

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote = new this.noteModel(createNoteDto);
    return newNote.save();
  }

  async remove(id: string): Promise<Note> {
    return this.noteModel.findByIdAndDelete(id);
  }

  async update(id: string, noteDto: UpdateNoteDto): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, noteDto, { new: true });
  }
}
