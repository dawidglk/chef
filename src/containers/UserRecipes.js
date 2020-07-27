import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesAsyncAction } from "../state/recipes";

const UserRecipes = (props) => {
  useEffect(() => {
    props.getRecipes();
  }, [props]);
  return <div>Moje przepisy</div>;
};

const mapStateToProps = (state) => ({
  recipes: state,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipesAsyncAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipes);
