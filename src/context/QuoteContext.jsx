import { createContext, useReducer } from "react";
import { QuoteReducer } from "../QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const initialState = {
    quoteData: {
      id: 2,
      quote:
        "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      author: "Abdul Kalam",
    },
  };

  const [state, dispatch] = useReducer(QuoteReducer, initialState);
  return (
    <QuoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
