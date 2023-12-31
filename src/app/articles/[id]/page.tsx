// import { getDetailArtciles } from "@/src/data/blogAPI"; JSON
import Image from "next/image";
import React from "react";
import DleteButton from "../../components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  // const detailArticle = await getDetailArtciles(params.id); JSON

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, {
    next: { revalidate: 60 },
  });
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt=""
        width={1280}
        height={300}
      ></Image>
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
