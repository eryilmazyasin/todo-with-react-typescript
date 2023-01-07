import { useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import { TextField, TodoList, NoItem } from "./components";

import classes from "./styles";
import { ITodo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [deletedCount, setDeletedCount] = useState(0);

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

  const deleteTodo = (todo: ITodo, index: number) => {
    const todoList: ITodo[] = [...todos];
    todoList.splice(index, 1);

    setDeletedCount(deletedCount + 1);

    setTodos(todoList);

    console.log({ todoList });
  };

  const renderNoItem = useMemo(() => {
    if (!todos.length) return <NoItem />;
  }, [todos.length]);

  const { checkedTodosNumber } = useMemo(() => {
    const checkedTodos = todos.filter((todo) => todo.checked);

    return {
      checkedTodosNumber: checkedTodos.length,
    };
  }, [todos]);

  const renderTodoListInfo = () => {
    if (!todos.length) return;

    return (
      <div className={classes.todoListInfo}>
        {deletedCount > 0 && (
          <span className="deletedSpan">
            {deletedCount === 1
              ? `${deletedCount} todo is`
              : `${deletedCount} todos are`}{" "}
            deleted
          </span>
        )}
        {deletedCount > 0 && checkedTodosNumber > 0 && " - "}
        {checkedTodosNumber > 0 && (
          <span>
            {checkedTodosNumber === 1
              ? `${checkedTodosNumber} todo is`
              : `${checkedTodosNumber} todos are`}{" "}
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
        <TodoList
          todos={todos}
          handleUpdateTodoCheck={updateTodoCheck}
          handleDeleteTodo={deleteTodo}
        />
      </Grid>
    </Container>
  );
}

export default App;
