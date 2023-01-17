import { Post, Body, Controller } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { UserLoginDTO, UserRegisterDTO } from '../dto/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) { }

  @Post('register')
  async register(@Body() userRegisterDTO: UserRegisterDTO) {
    const user = await this.userService.create(userRegisterDTO);
    const payload = {
      email: user.email,
    };

    return { user: user };
  }

  @Post('login')
  async login(@Body() userLoginDTO: UserLoginDTO) {
   const user = await this.userService.login(userLoginDTO);
    const payload = {
      email: user.email,
      userId: user._id.toString()
    };
    const token = await this.authService.signPayload(payload);
    return { user: payload, token };
  }
}


