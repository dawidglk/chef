import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  SwipeableDrawer,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { openDrawer, closeDrawer } from "../state/drawer";

const links = [
  { title: "Dodaj przepis", route: "/add-recipe" },
  { title: "Przepisy", route: "/recipes" },
  { title: "Twoje przepisy", route: "/your-recipes" },
];

const Drawer = (props) => {
  console.log(props);
  return (
    <SwipeableDrawer
      open={props.isOpen}
      onClose={() => props.close()}
      onOpen={() => props.open()}
    >
      <List>
        {links.map((link) => (
          <ListItem
            button={true}
            key={link.title}
            onClick={() => {
              props.close();
              props.history.push(link.route);
            }}
          >
            <ListItemText>{link.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

Drawer.propTypes = {};

const mapStateToProps = (state) => ({
  isOpen: state.drawer.isOpen,
});
const mapDispatchToProps = (disptach) => ({
  open: () => disptach(openDrawer()),
  close: () => disptach(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Drawer));
