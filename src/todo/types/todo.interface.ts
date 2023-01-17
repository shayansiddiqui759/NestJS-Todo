import * as mongoose from 'mongoose';

export interface Todo {
  id?: string;
  name: string;
  description?: string;
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}
