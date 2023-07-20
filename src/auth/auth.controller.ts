import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsuarioSchema } from "src/usuario/usuario.schema";

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService){};

    @Post("login")
    async login(@Body() body: UsuarioSchema){
        return this.authService.validarUsuario(body.email, body.senha);
    }
}