export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=sasquatch&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const articles = await res.json();
  console.log('articles', articles.articles);
  return articles.articles;
};

export const fetchNews = async (searchParam) => {
  const res = await fetch(`
  https://newsapi.org/v2/everything?q=${searchParam}&apiKey=${process.env.REACT_APP_API_KEY}`);
  const json = await res.json();
  return json;
};
