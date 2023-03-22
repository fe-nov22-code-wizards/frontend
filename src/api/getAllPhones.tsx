import { Phone } from '../types/Phone';

const BASE_URL = 'https://api-gwis.onrender.com';

export async function getAllPhones(): Promise<Phone[]> {
  const response = await fetch(`${BASE_URL}/phones`);

  return response.json();
}

export async function getOne(phoneId: string) {
  const response = await fetch(`${BASE_URL}/phones/${phoneId}`);
  const { dataValues } = await response.json();

  return dataValues;
}
