import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  active: boolean;

  @Prop({
    required: true,
    default: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }),
  })
  date: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
