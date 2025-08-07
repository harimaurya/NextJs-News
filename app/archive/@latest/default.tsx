import NewsList from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
    const latestNews = getLatestNews(); 
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <NewsList news={latestNews} />
    </div>
  );
}

export const metadata = {
  title: "Latest News",
  description: "Stay updated with the latest news articles.",
};