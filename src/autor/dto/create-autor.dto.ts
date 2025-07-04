import { IsString } from 'class-validator';

export class CreateAutorDto {
  @IsString()
  nombre: string;
}
