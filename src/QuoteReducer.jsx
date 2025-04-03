export const QuoteReducer = (state, action) => {
  switch (action.type) {
    
    case "Get_Quote":
      return {
        ...state,
        quoteData: action.payload,
      };

    default:
      return state;
  }
};
