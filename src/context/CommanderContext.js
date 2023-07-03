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
};

export default CommanderContext;
