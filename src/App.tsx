import React from "react";
import { Container, Grid, InputAdornment } from "@mui/material";
import { Add } from "@mui/icons-material";
import TextField from "./components/TextField";

import classes from "./styles";

function App() {
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid item xs={8}>
        <TextField />
      </Grid>
    </Container>
  );
}

export default App;
