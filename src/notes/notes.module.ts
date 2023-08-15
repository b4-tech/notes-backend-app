import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note } from './schemas/note.schema';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [SequelizeModule.forFeature([Note])],
})
export class NotesModule { }
