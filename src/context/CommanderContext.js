import { createContext, useState, useEffect } from 'react';

// Create Commander Context
const CommanderContext = createContext();

export const CommanderProvider = ({ children }) => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  // MTG API url
  const cardsUrl =
    'https://commander-app-data.onrender.com/commanders?_sort=id&order=desc';

  // UseEffect call on first Render
  useEffect(() => {
    fetchCards();
  }, []);

  // Fetch Call to API
  const fetchCards = async () => {
    const response = await fetch(cardsUrl);

    const data = await response.json();

    setCardData(data);
    setIsLoading(false);
  };

  const addCommander = async (newCommander) => {
    const response = await fetch(cardsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCommander),
    });

    const data = await response.json();

    setCardData([data, ...cardData]);
  };

  // Component Return
  return (
    <CommanderContext.Provider
      value={{
        isLoading,
        cardData,
        addCommander,
      }}>
      {children}
    </CommanderContext.Provider>
  );
};

export default CommanderContext;
