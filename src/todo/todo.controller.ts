import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoDTO } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { Todo } from './types/todo.interface';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get()
    findAll(): Promise<Todo[]> {
        return this.todoService.findAllTodos();
    }

    @Get(':name')
    findTodo(@Param('name') name): Promise<Todo> {
        return this.todoService.findTodoByName(name)
    }

    @Post()
    addTodo(@Body() addTodoDto: TodoDTO): Promise<Todo> {
        return this.todoService.addTodo(addTodoDto)
    }

    @Delete(':id')
    deleteTodo(@Param('id') id): Promise<Todo> {
        return this.todoService.deleteTodo(id)
    }

    @Put(':id')
    updateTodo(@Body() updateTodoDto: TodoDTO, @Param('id') id): Promise<Todo>  {
        return this.todoService.updateTodo(id, updateTodoDto);
    }
}
