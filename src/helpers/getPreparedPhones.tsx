/* eslint-disable indent */
import { Phone } from '../types/Phone';

export const getPreparedPhones = (phones: Phone[], sortBy: string) => {
  const preparedPhones = [...phones];

  preparedPhones.sort((p1, p2) => {
    switch (sortBy) {
      case 'age':
        return p2.year - p1.year;

      case 'price':
        return p1.price - p2.price;

      case 'title':
        return p1.name.localeCompare(p2.name);

      default:
        return 0;
    }
  });

  return preparedPhones;
};
