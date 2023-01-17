
import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as fs from 'fs';
import { join } from 'path';

const privateKey = fs.readFileSync(join(process.cwd(), '/config/private.key'));
@Injectable()
export class AuthService {
  async signPayload(payload) {
    return sign(payload, privateKey, {
      algorithm: 'RS256',
    });
  }
  
}
