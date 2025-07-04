import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ) {}

  create(dto: CreateAutorDto) {
    const autor = this.autorRepository.create(dto);
    return this.autorRepository.save(autor);
  }

  findAll() {
    return this.autorRepository.find({ relations: ['libros'] });
  }

  findOne(id: number) {
    return this.autorRepository.findOne({
      where: { id },
      relations: ['libros'],
    });
  }

  update(id: number, dto: UpdateAutorDto) {
    return this.autorRepository.update(id, dto);
  }

  remove(id: number) {
    return this.autorRepository.delete(id);
  }
}
