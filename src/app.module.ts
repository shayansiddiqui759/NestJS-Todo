import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import config from './config/keys';

@Module({
  imports: [TodoModule, MongooseModule.forRoot(config.mongoURI )],

})
export class AppModule {}
