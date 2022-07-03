const initialState = {
    count: 0,
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'Search_Gifts':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'Giftees':
        return {
          ...state,
          count: state.count + 5,
        };

      case 'Third':
        return {
          ...state,
          count: state.count + 10,
        };

      case 'Return_Home':
        return {
          ...state,
          count: state.count -1,
        };
      default:
        return state;
    }
  };