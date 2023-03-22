const BASE_URL = 'https://api-gwis.onrender.com';

export async function getAllPhones(
  page: number,
  perPage: number,
  sort: string,
) {
  const response = await fetch(
    `${BASE_URL}/phones?perPage=${perPage}&page=${page}&sort=${sort}`,
  );

  const data = await response.json();

  return data;
}

export async function getOne(phoneId: string) {
  const response = await fetch(`${BASE_URL}/phones/${phoneId}`);
  const { dataValues } = await response.json();

  return dataValues;
}

export async function getOne(phoneId: string) {
  const response = await fetch(`${BASE_URL}/phones/${phoneId}`);
  const { dataValues } = await response.json();

  return dataValues;
}
