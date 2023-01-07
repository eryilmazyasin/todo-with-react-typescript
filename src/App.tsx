import { useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import { TextField, TodoList, NoItem } from "./components";

import classes from "./styles";
import { ITodo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    if (!todo.text) return;

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  const updateTodoCheck = (index: number, checked: boolean) => {
    const todoList: ITodo[] = [...todos];

    todoList[index].checked = checked;
    console.log({ todoList, index, checked });
    // setTodos(updatedTodo);
  };

  console.log({ todos });

  const renderNoItem = useMemo(() => {
    if (!todos.length) return <NoItem />;
  }, [todos.length]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      {/* Header textfield */}
      <Grid item xs={12}>
        <TextField handleAddTodo={addTodo} />
      </Grid>
      {/* Header textfield end*/}

      <Grid container item xs={12}>
        {renderNoItem}
        <TodoList todos={todos} updateTodoCheck={updateTodoCheck} />
      </Grid>
    </Container>
  );
}

export default App;
