import { Hono } from "hono";
// import { Fetch } from "hono/client";

const app = new Hono();

// app.get('/api/news/technology', async (c) => {
//   const techNewsResponse = await fetch('https://www.technews.com/api/news');
//   const techNewsData = await techNewsResponse.json();

//   const technologyNews = await techNewsData.filter((article:any) => article.category === 'technology');

//   return c.json(techNewsData)
// });

app.get('/api/news/latest', async (c) => {
  const newsApiResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?country=id&apikey=7aa522a2df2f4d67acd9c6bc655fd297');
  const newsApiData = await newsApiResponse.json();

  console.log(newsApiData);
  
  return c.json(newsApiData);
});

export default app;