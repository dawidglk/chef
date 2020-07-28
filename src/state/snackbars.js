const ADD_SNACKBARS = "snackbars/ADD_SNACKBARS";
const REMOVE_SNACKBARS = "snackbars/REMOVE_SNACKBARS";

//AKCJA
const addSnack = (text, color, key) => ({
  type: ADD_SNACKBARS,
  text,
  color,
  key,
});
const removeSnack = (key) => ({ type: REMOVE_SNACKBARS, key });

export const addSnackbar = (text, color = "green", time = 3000) => (
  dispatch,
  getState
) => {
  const key = Date.now();

  dispatch(addSnack(text, color, key));

  setTimeout(() => dispatch(removeSnack(key)), time);
};

const initialState = {
  bars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SNACKBARS:
      return {
        ...state,
        bars: [
          { text: action.text, color: action.color, key: action.key },
          ...state.bars,
        ],
      };
    case REMOVE_SNACKBARS:
      return {
        ...state,
        bars: state.bars.filter((el) => el.key !== action.key),
      };
    default:
      return state;
  }
};
