export const generateQuery = (
  term: string,
  catId: number,
  platId: number,
  genreId: number
) => {
  let query = '';

  if (term) {
    query += `term=${term}&`;
  }
  if (catId) {
    query += `catId=${catId}&`;
  }
  if (platId) {
    query += `platId=${platId}&`;
  }
  if (genreId) {
    query += `genreId=${genreId}`;
  }
  return query;
};
