import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    const saved = localStorage.getItem('wd_currency');
    return saved || 'USD';
  });

  useEffect(() => {
    localStorage.setItem('wd_currency', currency);
  }, [currency]);

  const toggleCurrency = (selectedCurrency) => {
    if (selectedCurrency) {
      setCurrency(selectedCurrency);
    } else {
      setCurrency((prev) => (prev === 'USD' ? 'NLe' : 'USD'));
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
