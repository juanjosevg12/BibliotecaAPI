import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  autorId: number;

  @IsNumber()
  categoriaId: number;

  @IsNumber()
  usuarioId?: number;
}
