import { createContext, useState, useEffect } from 'react';

// Create Commander Context
const CommanderContext = createContext();

export const CommanderProvider = ({ children }) => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
};

export default CommanderContext;
