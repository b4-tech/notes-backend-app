import { IsString, IsBoolean, IsOptional } from "class-validator";
export class CreateNoteDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  content: string;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  date?: string;
}
