import { createContext, useState, useEffect } from 'react';

// Create Commander Context
const CommanderContext = createContext();

export const CommanderProvider = ({ children }) => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  // MTG API url
  const cardsUrl =
    'https://api.magicthegathering.io/v1/cards?supertypes=legendary&types=creature';

  // UseEffect call on first Render
  useEffect(() => {
    fetchCards();
  }, []);

  // Fetch Call to API
  const fetchCards = async () => {
    const response = await fetch(cardsUrl);

    const data = await response.json();

    setCardData(data.cards);
    setIsLoading(false);
  };

  // Component Return
  return (
    <CommanderContext.Provider
      value={{
        isLoading,
        cardData,
      }}>
      {children}
    </CommanderContext.Provider>
  );
};

export default CommanderContext;
