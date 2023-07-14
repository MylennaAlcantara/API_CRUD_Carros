import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaCarroController } from "src/controller/categoriaCarro.controller";
import { categoriaCarroModel } from "src/model/categoriaCarro.model";
import { categoriaCarroService } from "src/services/categoriaCarro.service";

@Module({
    imports: [TypeOrmModule.forFeature([categoriaCarroModel])],
    controllers: [CategoriaCarroController],
    providers: [categoriaCarroService]
})
export class categoriaCarroModule{}