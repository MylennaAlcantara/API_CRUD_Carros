import { IsEmail, IsInt, IsString, MaxLength, Min } from "class-validator";


export class modeloCarroSchema{
    
    @IsString()
    @MaxLength(120)
    modelo: string;

    @IsInt()
    @Min(1)
    ano: number;

    @IsInt()
    @Min(1)
    id_categoria: number;

    @IsString()
    @MaxLength(45)
    categoria: string;
}