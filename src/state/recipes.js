import axios from "axios";
import { URL } from "../const/firebase";
import { circuralsProgress } from "./fullScreenProgress";
import { addSnackbar } from "./snackbars";
import mapObjectToArray from "../utilities/mapObjectToArray";

const SAVE_RECIPES = "recipes/SAVE_RECIPES";
const ERROR = "recipes/ERROR";

export const addRecipesAsyncAction = (form) => (dispatch, getState) => {
  dispatch(circuralsProgress.add());
  return axios
    .post(`${URL}recipes.json`, form)
    .then(() => {
      dispatch(circuralsProgress.remove());
      dispatch(addSnackbar("PRZEPIS DODANY PRAWIDLOWO"));
    })
    .catch(() => {
      dispatch(circuralsProgress.remove());
      dispatch(addSnackbar("Dodawanie nie powiodlo sie", "red"));
      return Promise.reject();
    });
};

//zapisywanie do reduxa tego co z gory pobiera getRecipesAsyncAction
const saveRecipesActionCreator = (recipes) => ({ type: SAVE_RECIPES, recipes });

const recipesErrorActionCreator = () => ({ type: ERROR });

export const getRecipesAsyncAction = () => (dispatch, getState) => {
  dispatch(circuralsProgress.add());
  axios
    .get(`${URL}recipes.json`)
    .then((response) => {
      const mappedData = mapObjectToArray(response.data);
      dispatch(saveRecipesActionCreator(mappedData));
      dispatch(circuralsProgress.remove());
    })
    .catch(() => {
      dispatch(circuralsProgress.remove());
      dispatch(recipesErrorActionCreator());
    });
};

const initialState = {
  recipes: [],
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        isError: false,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
