import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Autor } from 'src/autor/entities/autor.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
  ) {}

  create(dto: CreateLibroDto) {
    const libro = this.libroRepository.create({
      titulo: dto.titulo,
      descripcion: dto.descripcion,
      autor: { id: dto.autorId } as Autor,
      categoria: { id: dto.categoriaId } as Categoria,
      usuario: dto.usuarioId ? ({ id: dto.usuarioId } as Usuario) : null,
    });
    return this.libroRepository.save(libro);
  }

  findAll() {
    return this.libroRepository.find({
      relations: ['autor', 'categoria', 'usuario'],
    });
  }

  findOne(id: number) {
    return this.libroRepository.findOne({
      where: { id },
      relations: ['autor', 'categoria', 'usuario'],
    });
  }

  async update(id: number, dto: UpdateLibroDto) {
    const libro = await this.libroRepository.findOneBy({ id });
    if (!libro) return null;

    if (dto.titulo !== undefined) libro.titulo = dto.titulo;
    if (dto.descripcion !== undefined) libro.descripcion = dto.descripcion;
    if (dto.autorId !== undefined) libro.autor = { id: dto.autorId } as Autor;
    if (dto.categoriaId !== undefined)
      libro.categoria = { id: dto.categoriaId } as Categoria;
    if (dto.usuarioId !== undefined)
      libro.usuario = dto.usuarioId ? ({ id: dto.usuarioId } as Usuario) : null;

    return this.libroRepository.save(libro);
  }

  remove(id: number) {
    return this.libroRepository.delete(id);
  }
}
