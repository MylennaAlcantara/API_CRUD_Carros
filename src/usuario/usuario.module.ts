import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModel } from "./usuario.model";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { UsuarioSchema } from "./usuario.schema";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel, UsuarioSchema])],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}