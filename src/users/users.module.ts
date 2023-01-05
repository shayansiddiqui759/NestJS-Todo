import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/services/auth.service';
import { UsersController } from './controllers/users.controller';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './services/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
