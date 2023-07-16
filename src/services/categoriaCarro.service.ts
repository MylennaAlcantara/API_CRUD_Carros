import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { categoriaCarroModel } from "src/model/categoriaCarro.model";
import { categoriaCarroSchema } from "src/schemas/categoriaCarro.schema";
import { Repository } from "typeorm";

@Injectable()
export class categoriaCarroService{
    constructor(
        @InjectRepository(categoriaCarroModel)
        private categoriaRepository: Repository<categoriaCarroModel>,
    ){}

    async getAll(): Promise<categoriaCarroModel[]>{
        return await this.categoriaRepository.find();
    }

    async getOne(id: number): Promise<categoriaCarroModel>{
        return await this.categoriaRepository.findOne({where: {id}});
    }

    async create(data: categoriaCarroSchema){
        const categoria = this.categoriaRepository.create(data);
        await this.categoriaRepository.save(data);
        return categoria;
    }

    async update(id: number, data: Partial<categoriaCarroModel>){
        return await this.categoriaRepository.update(id, data);
    }

    async delete(id: number){
        return await this.categoriaRepository.delete(id);
    }

}