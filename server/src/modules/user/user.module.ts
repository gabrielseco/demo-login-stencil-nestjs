import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './providers/user.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [UsersController],
  components: [
    ...userProviders,
    UsersService,
  ],
})
export class UsersModule {}
