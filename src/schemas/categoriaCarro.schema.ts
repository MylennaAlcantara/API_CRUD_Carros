import { IsString, MaxLength } from "class-validator";

export class categoriaCarroSchema{
    @IsString()
    @MaxLength(120)
    categoria: String;
}