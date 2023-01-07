import { useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import { TextField, List, NoItem } from "./components";

import classes from "./styles";
import { ITodo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    if (!todo.text) return;

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
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
        {/* {renderNoItem} */}
        <List />
      </Grid>
    </Container>
  );
}

export default App;
