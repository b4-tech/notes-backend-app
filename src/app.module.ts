import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot(
      "mongodb+srv://user:0li9tRpBp3BPyi7h@cluster0.czdjch3.mongodb.net/?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
