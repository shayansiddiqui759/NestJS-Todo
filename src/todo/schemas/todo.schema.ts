import { User } from './../../users/types/user.interface';
import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({

  name: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
