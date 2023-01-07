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

    setTodos(todoList);
  };

  const deleteTodo = () => {};

  const renderNoItem = useMemo(() => {
    if (!todos.length) return <NoItem />;
  }, [todos.length]);

  const { checkedTodos } = useMemo(() => {
    const checkedTodos = todos.filter((todo) => todo.checked);

    return {
      checkedTodos,
    };
  }, [todos]);

  const renderTodoListInfo = () => {
    if (!todos.length) return;

    return (
      <div className={classes.todoListInfo}>
        {checkedTodos.length > 0 && (
          <span>
            {checkedTodos.length === 1
              ? `${checkedTodos.length} todo is`
              : `${checkedTodos.length} todos are`}{" "}
            done
          </span>
        )}
      </div>
    );
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      {/* Header textfield */}
      <Grid item xs={12}>
        <TextField handleAddTodo={addTodo} />
      </Grid>
      {/* Header textfield end*/}

      <Grid container item xs={12}>
        {renderTodoListInfo()}
        {renderNoItem}
        <TodoList todos={todos} updateTodoCheck={updateTodoCheck} />
      </Grid>
    </Container>
  );
}

export default App;
