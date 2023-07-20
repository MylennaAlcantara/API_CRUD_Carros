import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }

    async validate(email: string, senha: string){
        const user = await this.authService.validarUsuario(email, senha);
        if(!user){
            throw new UnauthorizedException("Email e/ou senha invalidos!");
        }
        return user;
    }

}