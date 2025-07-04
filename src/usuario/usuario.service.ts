import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(dto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(dto);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find({ relations: ['libros'] });
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id },
      relations: ['libros'],
    });
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    await this.usuarioRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
