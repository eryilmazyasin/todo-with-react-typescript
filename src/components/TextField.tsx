import { InputAdornment, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

import classes from "../styles";

const MyTextField = () => {
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
    />
  );
};

export default MyTextField;
