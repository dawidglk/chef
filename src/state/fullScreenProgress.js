const ADD_CIRCURAL = "fullScreenProgress/ADD_CIRCURAL";
const REMOVE_CIRCURAL = "fullScreenProgress/REMOVE_CIRCURAL";

//AKCJA
const addCircuralProgress = () => ({ type: ADD_CIRCURAL });
const removeCircuralProgress = () => ({ type: REMOVE_CIRCURAL });

export const circuralsProgress = {
  add: addCircuralProgress,
  remove: removeCircuralProgress,
};

const initialState = {
  circurals: [],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CIRCURAL:
      return {
        ...state,
        circurals: [...state.circurals, true],
      };
    case REMOVE_CIRCURAL:
      return {
        ...state,
        circurals: [],
      };
    default:
      return state;
  }
};
