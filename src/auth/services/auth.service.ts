import { UsersService } from 'src/users/services/users.service';
import { Injectable } from '@nestjs/common';
import { sign } from 'crypto';
import * as fs from 'fs';
import { join } from 'path'

console.log(__dirname)
const privateKey = fs.readFileSync(join(__dirname, './a.json'));
@Injectable()
export class AuthService {

    constructor(private userService: UsersService ) {}
    
    async signPayload(payload){
        return sign('RSA256',payload, privateKey )
    }
  
}
