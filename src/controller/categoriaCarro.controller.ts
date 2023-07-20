import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { categoriaCarroModel } from "src/model/categoriaCarro.model";
import { categoriaCarroSchema } from "src/schemas/categoriaCarro.schema";
import { categoriaCarroService } from "src/services/categoriaCarro.service";

@Controller('/categoria')
export class CategoriaCarroController{
    constructor(
        private categoriaRepository: categoriaCarroService,
    ){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
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