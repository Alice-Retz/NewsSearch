export const fetchArticles = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}'
  );
  const articles = await res.json();
  return articles;
};

export const fetchNews = async (searchParam) => {
  const res = await fetch(`
  https://newsapi.org/v2/everything?q=${searchParam}&apiKey=${process.env.REACT_APP_API_KEY}`);
  const json = await res.json();
  return json;
};
