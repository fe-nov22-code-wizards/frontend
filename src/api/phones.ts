import { Phone } from '../types/Phone';

const BASE_URL = 'https://api-gwis.onrender.com';

// eslint-disable-next-line space-before-function-paren
export const getAllPhones = async (): Promise<Phone[]> => {
  const response = await fetch(`${BASE_URL}/phones`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
