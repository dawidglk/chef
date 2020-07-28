import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesAsyncAction } from "../state/recipes";

import { Typography } from '@material-ui/core'
import RecipesList from "../components/RecipesList/RecipesList";


const styles = {
  refresh: { cursor: 'pointer', color: 'blue' },
  autocomplete: { maxWidth: 700, margin: '30px auto' },
  noRecipes: { cursor: 'pointer' }
}



const UserRecipes = (props) => {

  useEffect(() => {
    props.getRecipes();
  }, []);

  const refreshData = () => {
    props.getRecipes();
  }

 
  if (props.isError) {
    return (
      <div>
        <Typography
          variant='h4'
          align='center'
          color='error'
        >
          Nie udało się pobrać przepisów
      </Typography>
        <Typography
          style={styles.refresh}
          variant='h4'
          align='center'
          onClick={refreshData}
          
        >
          Odśwież
      </Typography>
      </div>
    )
  } else {
    return (
      <RecipesList recipes={props.recipes}/>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state,'mapstate')
  return({
  recipes: state.recipes.recipes,
  isError: state.recipes.isError
})};

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipesAsyncAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipes);
