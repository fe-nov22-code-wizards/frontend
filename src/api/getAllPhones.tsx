import { Phone } from '../types/Phone';

const BASE_URL = 'https://api-gwis.onrender.com';

export async function getAllPhones(): Promise<Phone[]> {
  const response = await fetch(`${BASE_URL}/phones`);

  return response.json();
}
