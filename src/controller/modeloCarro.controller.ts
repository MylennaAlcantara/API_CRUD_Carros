import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { modeloCarroModel } from "src/model/modeloCarro.model";
import { modeloCarroSchema } from "src/schemas/modeloCarro.schema";
import { ModeloCarroService } from "src/services/modeloCarro.service";

@Controller("/modelo")
export class modeloCarroController {

    constructor(
        private modeloRepository: ModeloCarroService,
    ){}

    @Post()
    public async create(@Body() body: modeloCarroSchema){

        return await this.modeloRepository.create(body);
    }
    
    @Get()
    @UseGuards(AuthGuard('jwt'))
    public async getAll(){
        const list = await this.modeloRepository.getAll();
        return {list};
    }

    @Get(':id')
    public async getOne(@Param('id') id: number){
        return await this.modeloRepository.findById(id);
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() data: Partial<modeloCarroModel>){
        return await this.modeloRepository.update(id, data);
    }

    @Delete(':id')
    public async delete(@Param('id') id: number){
        return await this.modeloRepository.delete(id);
    }
}