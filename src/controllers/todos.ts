import { RequestHandler } from 'express';
import { Todo } from '../models/todos';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(String(Math.random()), text);

  TODOS.push(newTodo);

  res.status(201).json({
    status: 'success',
    data: newTodo,
  });
};
