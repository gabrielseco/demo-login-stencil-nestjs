import { Constants } from './../constants/index';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: Constants.DbConnectionToken,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'users-mock',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];