/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react';
import { Phone } from '../../types/Phone';

type FavouritesContextType = {
  favouritesPhones: Phone[];
  addFavouritePhone: (phone: Phone) => void;
  removeFavouritePhone: (phone: Phone) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favouritesPhones: [],
  addFavouritePhone: () => {},
  removeFavouritePhone: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favouritesPhones, setFavouritesPhones] = useState<Phone[]>(() => {
    const storedPhones = localStorage.getItem('favouritesPhones');

    return storedPhones ? JSON.parse(storedPhones) : [];
  });

  useEffect(() => {
    localStorage.setItem('favouritesPhones', JSON.stringify(favouritesPhones));
  }, [favouritesPhones]);

  const addFavouritePhone = (phone: Phone) => {
    if (phone && !favouritesPhones.includes(phone)) {
      setFavouritesPhones((prevFavPhones) => [...prevFavPhones, phone]);
    }
  };

  const removeFavouritePhone = (phone: Phone) => {
    const newFavouritesPhones = favouritesPhones.filter(
      (p) => p.id !== phone.id,
    );

    setFavouritesPhones(newFavouritesPhones);
  };

  return (
    <FavouritesContext.Provider
      value={{
        addFavouritePhone,
        removeFavouritePhone,
        favouritesPhones,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
