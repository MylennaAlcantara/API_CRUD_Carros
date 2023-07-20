import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class UsuarioModel{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;
}