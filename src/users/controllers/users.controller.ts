
import { Post , Get, Body, Controller } from '@nestjs/common';
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
    async register(@Body() UserRegisterDTO: UserRegisterDTO){
        const user = await this.userService.create(UserRegisterDTO);
        const payload = {
            email: user.email,
        };

        const token = await this.authService.signPayload(payload);
        return {user: user, token: token}
    }

    @Post('login')
    async login(@Body() UserLoginDTO: UserLoginDTO){
        const user = await this.userService.login(UserLoginDTO);
        const payload = {
            email: user.email,
        };
        const token = await this.authService.signPayload(payload);
        return {user: user, token: token}
    }
}
