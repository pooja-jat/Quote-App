import React, { useContext, useEffect } from "react";
import QuoteContext from "../context/QuoteContext";
import { fetchQuote } from "../context/QuoteService";

const Card = () => {
  const { quoteData, dispatch } = useContext(QuoteContext);

  const getQuote = async () => {
    const data = await fetchQuote();
    dispatch({
      type :  "Get_Quote" ,
      payload : data,
    })
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-xl">
      <h1 className="text-lg font-bold my-3">{quoteData?.quote}</h1>
      <p className="text-sm font-semibold">{quoteData?.author}</p>
      <button
        onClick={getQuote}
        className="mt-6 bg-green-600 py-2 w-full rounded-4xl font-bold text-white hover:bg-green-400 hover: cursor-pointer"
      >
        Get More
      </button>
    </div>
  );
};

export default Card;
