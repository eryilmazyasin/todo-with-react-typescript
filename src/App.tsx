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

  const deleteTodo = (index: number) => {
    const todoList: ITodo[] = [...todos];
    todoList.splice(index, 1);

    setDeletedCount(deletedCount + 1);

    setTodos(todoList);
  };

  const renderEmptyList = useMemo(() => {
    if (!todos.length) return <NoItem />;
  }, [todos.length]);

  const { checkedTodosLength, todosLength } = useMemo(() => {
    const checkedTodos = todos.filter((todo) => todo.checked);

    return {
      checkedTodosLength: checkedTodos.length,
      todosLength: todos.length,
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
        {deletedCount > 0 && checkedTodosLength > 0 && " - "}
        {checkedTodosLength > 0 && (
          <span>
            {checkedTodosLength === 1
              ? `${checkedTodosLength} todo is`
              : `${checkedTodosLength} todos are`}{" "}
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
        {renderEmptyList}
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
