import { Phone } from '../types/Phone';

const BASE_URL = 'https://api-gwis.onrender.com';

export async function getPhonesByCategory(category: string): Promise<Phone[]> {
  const response = await fetch(`${BASE_URL}/phones/${category}`);

  return response.json();
}
