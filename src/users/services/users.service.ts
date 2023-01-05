import { UserLoginDTO, UserRegisterDTO } from './../dto/user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../types/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userRegisterDTO: UserRegisterDTO) {
    const { email } = userRegisterDTO;
    const user = await this.userModel.findById(email);
    console.log(user);
    return user;
  }

  async login(userDTO: UserLoginDTO) {
    const { email, password } = userDTO;
    const user = await this.userModel.findOne({ email });
    return user;
  }

  // await bcrypt.compare(password, user.password);
  //       return this.sanitizeUser(user);
  //   constructor() {}
  // @InjectModel('User') private userModel: Model<User>
  //   async create(UserRegisterDTO: UserRegisterDTO) {
  //     const { email } = UserRegisterDTO;
  //     const user = await this.userModel.findOne({ email });
  //     if (user) {
  //       throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
  //     }
  //     const newUser = new this.userModel(UserRegisterDTO);
  //     await newUser.save();
  //     return this.sanitizeUser(newUser);
  //   }
  //   async login(userDTO: UserLoginDTO) {
  //     const { email, password } = userDTO;
  //     try {
  //       const user = await this.userModel.findOne({ email });
  //       await bcrypt.compare(password, user.password);
  //       return this.sanitizeUser(user);
  //     } catch (err) {
  //       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  //     }
  //   }
  //   // return object without password
  //   sanitizeUser(user: User) {
  //     const sanitized = user;
  //     delete sanitized['password'];
  //     return sanitized;
  //   }
}
