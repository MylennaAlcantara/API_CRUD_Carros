import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { modeloCarroController } from "src/controller/modeloCarro.controller";
import { modeloCarroModel } from "src/model/modeloCarro.model";
import { ModeloCarroService } from "src/services/modeloCarro.service";

@Module({
    imports: [TypeOrmModule.forFeature([modeloCarroModel])],
    controllers: [modeloCarroController],
    providers: [ModeloCarroService]
})
export class modeloCarroModule{

}