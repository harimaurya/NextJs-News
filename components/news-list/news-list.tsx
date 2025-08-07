import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsList({ news }: { news: typeof DUMMY_NEWS }) {
  return (
    <ul className="news-list space-y-4 flex flex-wrap gap-4">
      {news.map((news) => (
        <li key={news.id} className="news-item">
          <Link
            href={`/news/${news.id}`}
            className="block border border-gray-600 rounded-lg"
          >
            <div className="news-thumbnail">
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                className="w-full h-48 object-cover rounded-md mb-2"
                width={200}
                height={150}
              />
            </div>
            <div className="news-content p-4">
              <span className="block text-xl font-semibold">{news.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const metadata = {
  title: "News List",
  description: "Here you can find a list of news articles.",
};
