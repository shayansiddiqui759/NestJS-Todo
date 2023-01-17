import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Authorization, AuthUser, AuthGuard } from 'src/auth/auth.guard';
import { TodoDTO } from '../dto/todo.dto';
import { TodoService } from '../services/todo.service';
import { Todo } from '../types/todo.interface';

@Controller('todo')
// @UseGuards(AuthGuard)

export class TodoController {
  constructor(private todoService: TodoService,
    
    ) {}
  
  @Get()
  findAll(
    @Authorization() user:AuthUser
  ): Promise<Todo[]> {
    // ): Promise<Todo[]> {
      // console.log(user)
      // const userId = user.userId;
    return this.todoService.findAllTodos();
  }

  @Get(':name')
  findTodo(@Param('name') name): Promise<Todo> {
    return this.todoService.findTodoByName(name);
  }

  @Post()
  addTodo(@Body() addTodoDto: TodoDTO,
  @Authorization() user:AuthUser
  ): Promise<Todo> {
    const userId = user.userId
    console.log('user',userId)
    
    return this.todoService.addTodo(addTodoDto);
    // return this.todoService.addTodo(addTodoDto,userId);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): Promise<Todo> {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(@Body() updateTodoDto: TodoDTO, @Param('id') id): Promise<Todo> {
    return this.todoService.updateTodo(id, updateTodoDto);
  }
}
