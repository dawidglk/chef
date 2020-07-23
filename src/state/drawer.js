const DRAWER_OPEN = "drawer/OPEN";
const DRAWER_CLOSE = "drawer/CLOSE";

export const openDrawer = () => ({ type: DRAWER_OPEN });
export const closeDrawer = () => ({ type: DRAWER_CLOSE });

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case DRAWER_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
