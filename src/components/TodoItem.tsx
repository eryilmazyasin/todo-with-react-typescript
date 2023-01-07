import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import { ITodo } from "../interfaces";

interface IProps {
  todo: ITodo;
  index: number;

  handleUpdateTodoCheck: (todoIndex: number, checked: boolean) => void;
  handleDeleteTodo: (todo: ITodo, todoIndex: number) => void;
}

export default function TodoItem({
  todo,
  index,
  handleUpdateTodoCheck,
  handleDeleteTodo,
}: IProps) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);

    if (handleUpdateTodoCheck) handleUpdateTodoCheck(index, !checked);
  };

  const onClickDelete = () => {
    if (handleDeleteTodo) handleDeleteTodo(todo, index);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={onClickDelete}>
          <Delete />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": todo.text }}
          />
        </ListItemIcon>
        <ListItemText id={todo.text} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
