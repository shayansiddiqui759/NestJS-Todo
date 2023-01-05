import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { AuthController } from './controller/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UsersService]
})
export class AuthModule {}
