import { Injectable } from '@nestjs/common';
import { Todo } from '../types/todo.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private readonly todoModel:Model<Todo>){}

    async findAllTodos(): Promise<Todo[]> {
        return await this.todoModel.find();
    }

    async findTodoByName(name: string): Promise<Todo> {
        return await this.todoModel.findOne({name: name});
    }

    async addTodo (todo: Todo): Promise<Todo> {
        const newTodo = new this.todoModel(todo)
        return await newTodo.save();
    }
    async deleteTodo(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }

    async updateTodo(id: string, todo: Todo): Promise<Todo> {
        await this.todoModel.findByIdAndUpdate(id, todo);
        return await this.todoModel.findById(id);  
    }
}
