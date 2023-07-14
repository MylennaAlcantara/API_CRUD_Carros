import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class categoriaCarroModel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    categoria: String;

}