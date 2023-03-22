/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react';
import { Phone } from '../../types/Phone';

type FavouritesContextType = {
  favouritesPhones: Phone[];
  addFavouritePhone: (phone: Phone) => void;
  removeFavouritePhone: (phone: Phone) => void;

  cartPhones: string[];
  addToCart: (phoneId: string) => void;
  removeOneFromCart: (phoneId: string) => void;
  removeAllFromCart: () => void;
  removeAllItemsByOneType: (phoneId: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favouritesPhones: [],
  addFavouritePhone: () => {},
  removeFavouritePhone: () => {},

  cartPhones: [],
  addToCart: () => {},
  removeOneFromCart: () => {},
  removeAllFromCart: () => {},
  removeAllItemsByOneType: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favouritesPhones, setFavouritesPhones] = useState<Phone[]>(() => {
    const storedPhones = localStorage.getItem('favouritesPhones');

    return storedPhones ? JSON.parse(storedPhones) : [];
  });

  const [cartPhones, setCartPhones] = useState<string[]>(() => {
    const currentCartPhones = localStorage.getItem('cart');

    return currentCartPhones ? JSON.parse(currentCartPhones) : [];
  });

  useEffect(() => {
    localStorage.setItem('favouritesPhones', JSON.stringify(favouritesPhones));

    localStorage.setItem('cart', JSON.stringify(cartPhones));
  }, [favouritesPhones, cartPhones]);

  const addFavouritePhone = (phone: Phone) => {
    if (phone && !favouritesPhones.includes(phone)) {
      setFavouritesPhones((prevFavPhones) => [...prevFavPhones, phone]);
    }
  };

  const addToCart = (phoneId: string) => {
    setCartPhones((prevCartPhones) => [...prevCartPhones, phoneId]);
  };

  const removeFavouritePhone = (phone: Phone) => {
    const newFavouritesPhones = favouritesPhones.filter(
      (p) => p.id !== phone.id,
    );

    setFavouritesPhones(newFavouritesPhones);
  };

  const removeOneFromCart = (phoneId: string) => {
    const neededIndex = cartPhones.indexOf(phoneId);
    const newCartPhones = [...cartPhones];

    if (neededIndex > -1) {
      for (let i = neededIndex; i < newCartPhones.length - 1; i++) {
        newCartPhones[i] = newCartPhones[i + 1];
      }

      newCartPhones.length--;
    }

    setCartPhones(newCartPhones);
  };

  const removeAllItemsByOneType = (phoneId: string) => {
    const newCartFhones = cartPhones.filter((idInCart) => idInCart !== phoneId);

    setCartPhones(newCartFhones);
  };

  const removeAllFromCart = () => {
    setCartPhones([]);
  };

  return (
    <FavouritesContext.Provider
      value={{
        addFavouritePhone,
        removeFavouritePhone,
        favouritesPhones,

        addToCart,
        removeOneFromCart,
        cartPhones,
        removeAllFromCart,
        removeAllItemsByOneType,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
