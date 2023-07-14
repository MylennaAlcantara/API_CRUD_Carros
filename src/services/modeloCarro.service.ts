import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { modeloCarroModel } from "src/model/modeloCarro.model";
import { modeloCarroSchema } from "src/schemas/modeloCarro.schema";
import { IntegerType, Repository } from "typeorm";

@Injectable()
export class ModeloCarroService{
    constructor(
        @InjectRepository(modeloCarroModel)
        private modeloCarroRepository: Repository<modeloCarroModel>,
    ){}

    async getAll(){
        return await this.modeloCarroRepository.find();
    }

    async create(data: modeloCarroSchema){
        const modelo = this.modeloCarroRepository.create(data);
        await this.modeloCarroRepository.save(data);
        return modelo;
    }

    async findById(id: number): Promise<modeloCarroModel>{
        return await this.modeloCarroRepository.findOne({
            where:{
                id: id,
            },
        });
    }

    async update(id: number, data: Partial<modeloCarroModel>): Promise<modeloCarroModel>{
        await this.modeloCarroRepository.update({id},data);
        return await this.modeloCarroRepository.findOne({where:{id: id}});
    }

    async delete(id: number){
        return await this.modeloCarroRepository.delete(id);
    }
}