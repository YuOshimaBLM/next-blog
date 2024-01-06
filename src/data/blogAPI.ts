import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArtciles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const articles = await res.json();
  return articles;
};

export const getDetailArtciles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); //ISR

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const article = await res.json();
  return article;
};

export const createArtcile = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
  }); //ISR

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const newArticle = await res.json();
  return newArticle;
};

export const deleteArtcile = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  }); //ISR

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const deleteArticle = await res.json();
  return deleteArticle;
};
