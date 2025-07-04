import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  create(dto: CreateCategoriaDto) {
    const categoria = this.categoriaRepository.create(dto);
    return this.categoriaRepository.save(categoria);
  }

  findAll() {
    return this.categoriaRepository.find({ relations: ['libros'] });
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({
      where: { id },
      relations: ['libros'],
    });
  }

  update(id: number, dto: UpdateCategoriaDto) {
    return this.categoriaRepository.update(id, dto);
  }

  remove(id: number) {
    return this.categoriaRepository.delete(id);
  }
}
