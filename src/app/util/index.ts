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
  if (catId && catId > -1) {
    query += `catId=${catId}&`;
  }
  if (platId && platId > -1) {
    query += `platId=${platId}&`;
  }
  if (genreId && genreId > -1) {
    query += `genreId=${genreId}`;
  }
  return query;
};
export const generateUrlQuery = (
  term: string,
  catId: number,
  platId: number,
  genreId: number
) => {
  let obj = {
    term: term ? term : null,
    categoryId: catId ? catId : null,
    platformId: platId ? platId : null,
    genreId: genreId ? genreId : null,
  };

  return obj;
};
