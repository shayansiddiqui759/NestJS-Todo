import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
const URI = 'mongodb://todo_db:27017/test';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(URI),
    AuthModule,
    TodoModule,
    UsersModule,
  ],
})
export class AppModule {}
