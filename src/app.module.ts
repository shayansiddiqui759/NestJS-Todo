import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import config from './config/keys';

@Module({
  imports: [TodoModule, MongooseModule.forRoot(config.mongoURI )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
