import { GenericObject, Url, Method } from './services.types';

//const url = 'http://127.0.0.1:8000/api/users/register';

export const mutationFunction = async (
  data: GenericObject,
  url: Url,
  method: Method,
  token?: string,
) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`${response?.status} ___ ${response?.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
