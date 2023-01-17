import * as mongoose from 'mongoose';

export class TodoDTO {
  // readonly name: string;
  // readonly description: string;
  // readonly user : User;
  readonly id?: string;
  readonly name: string;
  readonly description?: string;
  readonly user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}
