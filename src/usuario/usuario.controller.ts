import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioSchema } from "./usuario.schema";

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
}