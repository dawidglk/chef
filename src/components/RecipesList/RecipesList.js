import React from "react";
import RecipesListItem from "./RecipesListItem";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 800,
    margin: "auto",
  },
};

const RecipesList = ({ recipes, changeRoute, route }) => {
  return (
    <div style={styles.container}>
      {recipes.map((recipe) => (
        <RecipesListItem
          key={recipe.key}
          recipe={recipe}
          route={route}
          changeRoute={changeRoute}
        />
      ))}
    </div>
  );
};

export default RecipesList;
