import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioSchema } from "./usuario.schema";
import { UsuarioModel } from "./usuario.model";
import { AuthGuard } from "@nestjs/passport";

@Controller("usuario")
export class UsuarioController{
    constructor(
        private usuarioRepository: UsuarioService
    ){}

    @Get("/:email")
    async buscarUsuario(@Param() email: string){
        return await this.usuarioRepository.findByEmail(email);
    }

    @Post("/cadastro")
    async cadastrarUsuario(@Body() body: UsuarioSchema){
        return await this.usuarioRepository.create(body);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAll(){
        return await this.usuarioRepository.findAll();
    }
}