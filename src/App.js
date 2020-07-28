import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FullScreenProgress from "./components/FullScreenProgress";
import Snackbars from "./components/Snackbars";
import ScrollToTop from "./components/ScrollToTop";
import Drawer from "./components/Drawer";
import AppBar from "./components/AppBar";
import AddRecipe from "./containers/AddRecipe";
import DashBoard from "./containers/DashBoard";
import Recipes from "./containers/Recipes";
import UserRecipes from "./containers/UserRecipes";
import ChangePassword from "./containers/ChangePassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Drawer />
        <Route path="/" exact component={DashBoard} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/your-recipes/:id?" component={UserRecipes} />
        <Route path="/change-password" component={ChangePassword} />
      </BrowserRouter>
      <FullScreenProgress />
      <Snackbars />
      <ScrollToTop />
    </div>
  );
};

export default App;
