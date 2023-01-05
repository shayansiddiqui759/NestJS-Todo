import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
