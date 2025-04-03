export const fetchQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  return data;
};
