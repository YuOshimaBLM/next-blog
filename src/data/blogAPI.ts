import { Article } from "./types";

export const getAllArtciles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR

  const articles = await res.json();
  return articles;
};
