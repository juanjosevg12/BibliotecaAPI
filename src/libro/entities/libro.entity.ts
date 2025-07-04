import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Autor } from 'src/autor/entities/autor.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Autor, (autor) => autor.libros)
  autor: Autor;

  @ManyToOne(() => Categoria, (categoria) => categoria.libros)
  categoria: Categoria;

  @ManyToOne(() => Usuario, (usuario) => usuario.libros, { nullable: true })
  usuario?: Usuario | null;
}
