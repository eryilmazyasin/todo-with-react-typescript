import { useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import { TextField, List, NoItem } from "./components";

import classes from "./styles";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    if (!todo.length) return;

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

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
