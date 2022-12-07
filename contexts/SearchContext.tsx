import React, { createContext, useState } from "react";

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<IDrink[]>([]);

  const searchCocktail = (str: string): void => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`;
    const config = {
      method: "get",
      headers: {
        Accept: "application/json",
      },
    };

    fetch(url, config)
      .then(async (res) => {
        try {
          const json: ISearch = await res.json();
          if (json === null || json.drinks.length === 0) {
            setResults([]);
          } else {
            setResults(json.drinks);
          }
        } catch (error) {
          console.log("Error: Something went wrong.", error);
        }
      })
      .catch((error) => {
        console.log("Error: Something went wrong.", error);
      });
  };

  return (
    <SearchContext.Provider value={{ results, searchCocktail }}>
      {children}
    </SearchContext.Provider>
  );
};

interface IContext {
  results: IDrink[];
  searchCocktail: (str: string) => void;
}

export const SearchContext = createContext<IContext>({
  results: [],
  searchCocktail: () => {},
});

export { SearchProvider };
