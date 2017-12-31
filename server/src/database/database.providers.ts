import { createConnection } from 'typeorm';
import { Constants } from './../constants';

export const databaseProviders = [
  {
    provide: Constants.DbConnectionToken,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];