import React from "react";
import RecipesListItem from "./RecipesListItem";

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 800,
      margin: 'auto'
    },
  }


const RecipesList = ({recipes}) => {

  return <div style={styles.container}>{recipes.map((recipe) => <RecipesListItem key={recipe.key} recipe={recipe}/>)}</div>;
};

export default RecipesList;