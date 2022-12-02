const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Contacts":
      return {
        ...state,
        count: 25,
      };

    case "Settings":
      return {
        ...state,
        count: 50,
      };

    case "Contact_Selected":
      return {
        ...state,
        count: 75,
      };

    case "Cart":
      return {
        ...state,
        count: 100,
      };

    case "Home":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
