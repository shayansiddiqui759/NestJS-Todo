import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schemas/user.schema';
import { UsersController } from './controllers/users.controller';
import { HttpExceptionFilter } from './http-exception.filters';
import { UsersService } from './services/users.service';
import { AuthService } from 'src/auth/services/auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
  ]
})
export class UsersModule {}
