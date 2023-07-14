import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modelo')
export class modeloCarroModel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    modelo: string;

    @Column('int')
    ano: number;
    
    @Column('int')
    id_categoria: number;

    @Column({ length: 45})
    categoria: string;
}