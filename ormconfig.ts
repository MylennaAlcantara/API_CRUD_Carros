import { DataSourceOptions } from "typeorm";

export const ormConfig: DataSourceOptions = {
  "database": "crud_carro",
  "host": "localhost",
  "type": "mariadb",
  "port": 3306,
  "username": "g3_informatica",
  "password": "#g31nf#",
  "synchronize": true,
  "entities": ["dist/**/*.model.js"]
}
