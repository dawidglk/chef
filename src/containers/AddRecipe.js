import React, { useState } from "react";
import { TextField } from "@material-ui/core";
const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    maxWidth: 350,
    margin: "10px 0",
  },
};

const MIN_NAME_LENGTH = 10;

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const nameValidate = (value) => {
    const validValue = value && value.replace(/\s{2,}/g, " ");
    if (value !== validValue) {
      setName(validValue);
    }
    const isError = !validValue || validValue.length < MIN_NAME_LENGTH;
    setNameError(isError);
    return isError;
  };

  const setValidName = (string) => {
    if (string.length < MIN_NAME_LENGTH) {
      setName(string);
    }
  };

  const inputs = [
    {
      label: "Nazwa",
      value: name,
      onChange: setValidName,
      error: nameError,
      validate: nameValidate,
      helperText: "Za krotka nazwa",
    },
  ];
  return (
    <div style={styles.div}>
      {inputs.map((input) => (
        <TextField
          key={input.label}
          style={styles.input}
          variant="outlined"
          fullWidth
          label={input.label}
          value={input.value}
          error={input.error}
          onChange={(e) => input.onChange(e.target.value)}
          onBlur={() => input.validate()}
          helperText={input.error && input.helperText}
        />
      ))}
    </div>
  );
};

export default AddRecipe;
