import { Module } from '@nestjs/common';
import { modeloCarroModule } from './modules/modeloCarro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ormConfig } from 'ormconfig';
import { categoriaCarroModule } from './modules/categoriaCarro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), modeloCarroModule, categoriaCarroModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
