import { Phone } from '../types/Phone';

const BASE_URL = 'http://localhost:3000';

export async function getPaginationPhones(
  page: number,
  perPage: number,
): Promise<Phone[]> {
  const response = await fetch(
    `${BASE_URL}/phones?perPage=${perPage}&page=${page}`,
  );

  const data = await response.json();

  return data.phones;
}
