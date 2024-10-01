import { Flight, Method } from '../../flights.types.ts';

export const createUpdateService = async (
  payload: Flight,
  url: string,
  method: Method,
  token?: string,
) => {
  //const url = 'http://127.0.0.1:8000/api/flights/create-flight';
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
