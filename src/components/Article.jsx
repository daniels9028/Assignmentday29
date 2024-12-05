import React from "react";
import ArticleCard from "./ArticleCard";

const Article = (props) => {
  const { articles } = props;

  return (
    <section className="my-20 max-w-[1444px] mx-auto lg:px-20 px-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold tracking-wide text-center">
          Check out our latest article
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center gap-8 mt-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
        <button className="mt-8 rounded-full bg-white text-[#458FF6] border border-[#458FF6] px-6 py-2 text-sm hover:bg-[#458FF6] hover:text-white transition-all duration-500">
          View All
        </button>
      </div>
    </section>
  );
};

export default Article;
