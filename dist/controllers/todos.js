"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(String(Math.random()), text);
    TODOS.push(newTodo);
    res.status(201).json({
        status: 'success',
        data: newTodo,
    });
};
exports.createTodo = createTodo;
