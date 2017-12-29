import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from '../user/user.module';

@Module({
  modules: [UsersModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
