import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Note } from "./schemas/note.schema";
import { FindOptions } from 'sequelize/types';

type NoteStats = {
  activeNotes: number;
  archivedNotes: number;
};

type CategoryStats = Record<string, NoteStats>;

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note,
  ) { }

  async getAll(): Promise<Note[]> {
    return this.noteModel.findAll();
  }

  getById(id: string): Promise<Note> {
    return this.noteModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(note: Note): Promise<Note> {
    return this.noteModel.create(note as Note);
  }

  async update(
    id: number,
    updatedNote: Note,
  ): Promise<{ affectedRows: number; updatedNoteData: Note }> {
    const [affectedRows, [updatedNoteData]] = await Note.update(updatedNote, {
      where: { id },
      returning: true,
    });
    return { affectedRows, updatedNoteData };
  }

  async delete(id: number): Promise<void> {
    const options: FindOptions = { where: { id } };
    const note = await Note.findOne(options);
    if (note) {
      await note.destroy();
    }
  }

  async stats(): Promise<CategoryStats> {
    const options: FindOptions = { attributes: ['category', 'isArchived'] };
    const notes = await Note.findAll(options);

    const stats: CategoryStats = {};

    for (const { dataValues: { category, isArchived } } of notes) {
      if (!stats[category]) {
        stats[category] = { activeNotes: 0, archivedNotes: 0 };
      }

      isArchived ? stats[category].archivedNotes++ : stats[category].activeNotes++;
    }

    return stats;
  }
}