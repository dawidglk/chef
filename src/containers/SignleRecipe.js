import React, { useState } from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import DotIcon from "@material-ui/icons/Brightness1";
import imgPlacecholder from "../img/img-placeholder.svg";

const styles = {
  backToRecipes: {
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

const SignleRecipe = ({ data, param, back, deleteRecipe }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
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
  console.log(deleteRecipe, "DEEEEELETE");
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
        <List style={{ marginTop: -5 }}>
          {data.ingredients.map((el, index) => (
            <ListItem
              style={{ paddingTop: 0, paddingBottom: 0 }}
              key={el.ingredients + el.quantity + index}
            >
              <ListItemIcon style={{ marginRight: -40 }}>
                <DotIcon style={{ width: 7 }} />
              </ListItemIcon>
              <ListItemText
                style={{ marginBottom: 0, marginTop: 0 }}
                primary={el.ingredients + " - " + el.quantity}
                primaryTypographyProps={{ style: { fontSize: 14 } }}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          width: 264,
          maxHeight: 264,
          position: "relative",
          margin: "0 auto",
        }}
      >
        <img
          style={{
            width: "100%",
            maxHeight: 264,
            backgroundImage: "url(" + imgPlacecholder + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          src={data.photo}
          alt={data.name}
          onError={(evt) => (evt.target.src = imgPlacecholder)}
        />
      </div>
      <div style={{ width: "100%", marginTop: 25 }}>
        <Typography variant="h5" align="center" color="secondary" gutterBottom>
          Sposób przygotowywania:
        </Typography>
        <Typography
          style={{
            wordBreak: "break-word",
            whiteSpace: "pre-line",
            marginTop: 20,
          }}
          align="center"
        >
          {data.description}
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 25,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          style={{ margin: 10 }}
          variant="contained"
          color="primary"
          onClick={() => {
            setIsDeleteDialogOpen(true);
          }}
        >
          Usuń
        </Button>
        <Button style={{ margin: 10 }} variant="contained" color="secondary">
          Edytuj
        </Button>
      </div>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <DialogTitle>{"Czy napewno chcesz usunąć przepis?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Przepis zostanie trwale usunięty. Nie można odwrócić tej operacji.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => {
              deleteRecipe(data.key, back, () => setIsDeleteDialogOpen(false));
            }}
          >
            Usuń
          </Button>
          <Button
            color="secondary"
            autoFocus
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default SignleRecipe;
