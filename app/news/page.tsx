import NewsList from "@/components/news-list/news-list";
import { DUMMY_NEWS } from "@/data/news";

export default function NewsPage() {
  return (
    <div id="news">
      <h1 className="mt-[3rem] text-4xl font-bold text-center">Latest News</h1>
      <div className="mt-8 px-3.5">
        <NewsList news={DUMMY_NEWS} />
      </div>
    </div>
  );
}
