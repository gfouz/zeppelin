/*export const get_posts = async () => {
  const url = 'http://127.0.0.1:8000/api/posts/postlist/';
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};*/

export const getListService = async (url: string, token?: string) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error al hacer la solicitud: ${response.status}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};
