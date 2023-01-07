import List from "@mui/material/List";
import { ITodo } from "../interfaces";
import TodoItem from "./TodoItem";

import classes from "../styles";

interface IProps {
  todos: ITodo[];

  handleUpdateTodoCheck: (todoIndex: number, checked: boolean) => void;
  handleDeleteTodo: (todo: ITodo, todoIndex: number) => void;
}

export default function TodoList({
  todos,
  handleUpdateTodoCheck,
  handleDeleteTodo,
}: IProps) {
  return (
    <List className={classes.todoList}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          handleUpdateTodoCheck={handleUpdateTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </List>
  );
}
