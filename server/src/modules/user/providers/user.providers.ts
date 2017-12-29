import { Constants } from './../../../constants/index';
import { Connection, Repository } from 'typeorm';
import { User } from './../entities/user.entity';

export const userProviders = [
  {
    provide: Constants.UserRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Constants.DbConnectionToken],
  },
];