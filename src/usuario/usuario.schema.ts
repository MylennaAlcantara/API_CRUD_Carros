import { IsEmail, IsString } from "class-validator";

export class UsuarioSchema{
    @IsString()
    nome: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    senha: string;
}