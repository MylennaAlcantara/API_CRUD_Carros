import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModel } from "src/usuario/usuario.model";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtStrategy } from "./strategies/jwt-strategy";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel]), JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, UsuarioService, JwtStrategy],
})
export class AuthModule{}