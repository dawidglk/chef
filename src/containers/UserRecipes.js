import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesAsyncAction } from "../state/recipes";

import { Typography } from "@material-ui/core";
import RecipesList from "../components/RecipesList/RecipesList";
import SignleRecipe from "./SignleRecipe";

const styles = {
  refresh: { cursor: "pointer", color: "blue" },
  autocomplete: { maxWidth: 700, margin: "30px auto" },
  noRecipes: { cursor: "pointer" },
};

const UserRecipes = (props) => {
  useEffect(() => {
    props.getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshData = () => {
    props.getRecipes();
  };

  console.log(props);

  if (props.isError) {
    return (
      <div>
        <Typography variant="h4" align="center" color="error">
          Nie udało się pobrać przepisów
        </Typography>
        <Typography
          style={styles.refresh}
          variant="h4"
          align="center"
          onClick={refreshData}
        >
          Odśwież
        </Typography>
      </div>
    );
  }
  if (props.match.params.id) {
    const recipe = props.recipes.find(
      (recipe) => recipe.key === props.match.params.id
    );

    return (
      <SignleRecipe
        data={recipe}
        param={props.match.params.id}
        back={() => props.history.push("/your-recipes")}
      />
    );
  }

  return (
    <RecipesList
      recipes={props.recipes}
      route="/your-recipes"
      changeRoute={props.history.push}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    isError: state.recipes.isError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipesAsyncAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipes);
