import { Phone } from '../types/Phone';

const BASE_URL = 'https://api-gwis.onrender.com/phones';

// eslint-disable-next-line space-before-function-paren
export const getALLPhones = async (): Promise<Phone[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};
