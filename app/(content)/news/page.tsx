import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div id="news">
      <h1 className="mt-[3rem] text-4xl font-bold text-center">Latest News</h1>
      <div className="mt-8 px-3.5">
        <NewsList news={news} />
      </div>
    </div>
  );
}
