import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioModel } from "src/usuario/usuario.model";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService{
    constructor(
        private readonly userRepository: UsuarioService,
        private jwtService: JwtService
    ){}

    async validarUsuario(email: string, senha: string){
        const user = await this.userRepository.findByEmail(email);
        if(!user){
            throw new UnauthorizedException("Email e/ou senha invalidos!")
        }
        if(user.senha === senha){
            return await this.gerarToken(user);
        }
        throw new UnauthorizedException("Email e/ou senha invalidos!")
    }

    async gerarToken(payload: UsuarioModel){
        return {
            access_token: this.jwtService.sign(
              { email: payload.email },
              {
                secret: '123456abcd',
                expiresIn: '50s',
              },
            ),
          };
    }

}