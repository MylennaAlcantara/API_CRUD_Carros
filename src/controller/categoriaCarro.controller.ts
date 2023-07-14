import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { categoriaCarroModel } from "src/model/categoriaCarro.model";
import { categoriaCarroSchema } from "src/schemas/categoriacarro.schema";
import { categoriaCarroService } from "src/services/categoriaCarro.service";

@Controller('/categoria')
export class CategoriaCarroController{
    constructor(
        private categoriaRepository: categoriaCarroService,
    ){}

    @Get()
    async getAll(){
        return await this.categoriaRepository.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.categoriaRepository.getOne(id);
    }

    @Post()
    async create(@Body() body: categoriaCarroSchema){
        return await this.categoriaRepository.create(body);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: categoriaCarroModel){
        return await this.categoriaRepository.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return await this.categoriaRepository.delete(id);
    }
}