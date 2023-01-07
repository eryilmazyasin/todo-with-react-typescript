import List from "@mui/material/List";
import { ITodo } from "../interfaces";
import TodoItem from "./TodoItem";

import classes from "../styles";

interface IProps {
  todos: ITodo[];

  updateTodoCheck: (todoKey: number, checked: boolean) => void;
}

export default function TodoList({ todos, updateTodoCheck }: IProps) {
  return (
    <List className={classes.todoList}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          updateTodoCheck={updateTodoCheck}
        />
      ))}
    </List>
  );
}
