import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ITodo } from "../interfaces";

import classes from "../styles";

interface IProps {
  handleAddTodo: (todo: ITodo) => void;
}

const TodoDefaults: ITodo = {
  text: "",
  checked: false,
};

export default function MyTextField(props: IProps) {
  const [todo, setTodo] = useState<ITodo>(TodoDefaults);
  const { handleAddTodo } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const todoObj: ITodo = {
        text: todo.text,
        checked: false,
      };

      handleAddTodo(todoObj);
      setTodo(TodoDefaults);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ text: e.target.value });
  };

  return (
    <TextField
      className={classes.input}
      id="filled-basic"
      label="Type your todo"
      variant="filled"
      fullWidth={true}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Add />
          </InputAdornment>
        ),
      }}
      onKeyDown={handleKeyDown}
      onChange={handleOnChange}
      value={todo.text}
    />
  );
}
