import List from "@mui/material/List";
import { ITodo } from "../interfaces";
import TodoItem from "./TodoItem";

interface IProps {
  todos: ITodo[];

  updateTodoCheck: (todoKey: number, checked: boolean) => void;
}

export default function TodoList({ todos, updateTodoCheck }: IProps) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        padding: "25px 10px 0 10px",
      }}
    >
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
