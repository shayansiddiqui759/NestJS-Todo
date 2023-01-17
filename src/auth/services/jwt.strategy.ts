// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, VerifiedCallback } from 'passport-jwt';
// import { Strategy } from 'passport-jwt';
// import * as fs from 'fs';
// import { join } from 'path';


// import { UsersService } from 'src/users/services/users.service';
// const publicKey = fs.readFileSync(join(process.cwd(), '/config/public.key'));


// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private usersService: UsersService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: publicKey,
//     });
//   }

//   async validate(payload: any, done: VerifiedCallback) {
//     console.log(payload);
//     const user = await this.usersService.validateUser(payload);
//     if (!user) {
//       return done(
//         new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
//         false,
//       );
//     }

//     return done(null, user, payload.iat);
//   }
// }