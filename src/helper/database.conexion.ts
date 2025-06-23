import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'prueba-tecnica',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
});
