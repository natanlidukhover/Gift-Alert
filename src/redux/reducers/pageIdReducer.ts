const initialState = {
  pageId: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Contacts":
      return {
        ...state,
        pageId: 25,
      };

    case "Settings":
      return {
        ...state,
        pageId: 50,
      };

    case "Contact_Selected":
      return {
        ...state,
        pageId: 75,
      };

    case "Cart":
      return {
        ...state,
        pageId: 100,
      };

    case "Home":
      return {
        ...state,
        pageId: 0,
      };

    default:
      return state;
  }
};
