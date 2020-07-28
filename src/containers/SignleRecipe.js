import React from "react";
import { Typography, Paper } from "@material-ui/core";

const styles = {
  backToRecipes: {
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

const SignleRecipe = ({ data, param, back }) => {
  console.log(param);
  if (!data) {
    return (
      <>
        <Typography variant="h4" color="secondary" align="center">
          Nie ma przepisu o takim id:{param}
        </Typography>
        <Typography
          style={styles.backToRecipes}
          variant="h4"
          color="primary"
          align="center"
          onClick={back}
        >
          Wroc do przepisow
        </Typography>
      </>
    );
  }
  return (
    <Paper style={{ padding: 20, maxWidth: 600, margin: "20px auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          margin: "20px 20px 0 20px",
        }}
      >
        <Typography
          style={{ maxWidth: 264, wordBreak: "break-word" }}
          variant="h5"
          align="center"
          color="secondary"
          gutterBottom
        >
          <b>{data.name.toUpperCase()}</b>
        </Typography>
        <Typography
          style={{ fontSize: 12 }}
          align="center"
          color="secondary"
          gutterBottom
          paragraph
        >
          Czas przygotowywania: {data.time}min
        </Typography>
        <Typography
          style={{ marginTop: 5 }}
          align="center"
          color="secondary"
          gutterBottom
        >
          <b>Składniki:</b>
        </Typography>
      </div>
    </Paper>
  );
};

export default SignleRecipe;
