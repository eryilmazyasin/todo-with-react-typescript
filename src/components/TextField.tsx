import { useRef, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

import classes from "../styles";
import React from "react";

interface IProps {
  handleAddTodo: (todo: string) => void;
}

export default function MyTextField(props: IProps) {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo(todo);
      setTodo("");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
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
      value={todo}
    />
  );
}
