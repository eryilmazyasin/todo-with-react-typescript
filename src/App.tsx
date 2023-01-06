import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { TextField, List } from "./components";

import classes from "./styles";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    console.log({ todoAddTodo: todo });
    if (!todo.length) return;

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  console.log({ todos });

  return (
    <Container maxWidth="sm" className={classes.container}>
      {/* Header textfield */}
      <Grid item xs={12}>
        <TextField handleAddTodo={addTodo} />
      </Grid>
      {/* Header textfield end*/}

      <Grid container item xs={12}>
        <List />
      </Grid>
    </Container>
  );
}

export default App;
