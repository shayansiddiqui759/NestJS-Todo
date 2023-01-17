import { request } from 'https';

import { CanActivate, createParamDecorator, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import * as fs from 'fs';
import { join } from 'path';
import * as jwt from 'jsonwebtoken';

const publicKey = fs.readFileSync(join(process.cwd(), '/config/public.key'));

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest()
      const token = request.headers['authorization']
      validateToken(token)

      return true;
    }
    catch (e) {
      throw e;
    }
  }
}

export function validateToken(token): void {
  const test = jwt.verify(token, publicKey, {
    algorithms: ['RS256'],
  })
}

export const Authorization =
  createParamDecorator((data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
   const accessToken = request.headers['authorization'];
    try {
      const decoded:any = jwt.verify(accessToken, publicKey, {
        algorithms: ['RS256'],
      });
      console.log(decoded)
      const user = { 
        userId: decoded.userId
      }
      return user;

      // return pick(decoded,'userId');
    } catch (error) {
      throw new HttpException('Invalid Token', error);
    }
  });

export interface AuthUser {
  userId: string;
}
function pick(decoded: string | jwt.JwtPayload, arg1: string): any {
  throw new Error('Function not implemented.');
}

