import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModel } from "./usuario.model";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { UsuarioSchema } from "./usuario.schema";
import { JwtStrategy } from "src/auth/strategies/jwt-strategy";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel, UsuarioSchema]), JwtModule.register({})],
    controllers: [UsuarioController],
    providers: [UsuarioService, AuthService, JwtStrategy]
})
export class UsuarioModule {}