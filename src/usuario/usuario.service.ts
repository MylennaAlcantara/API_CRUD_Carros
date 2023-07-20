import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioModel } from "./usuario.model";
import { Repository } from "typeorm";
import { UsuarioSchema } from "./usuario.schema";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioModel)
        private UsuarioRepository: Repository<UsuarioModel>,
    ){}

    async create(@Body() body: UsuarioSchema): Promise<UsuarioSchema>{
        const usuario = this.UsuarioRepository.create(body);
        await this.UsuarioRepository.save(usuario);
        return usuario;
    }

    async findByEmail(email: string): Promise<UsuarioModel>{
        return await this.UsuarioRepository.findOne({
            where: {
                email: email
            }
        });
    }
}