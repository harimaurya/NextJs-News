import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div id="news">
      <h1 className="mt-[3rem] text-4xl font-bold text-center">Latest News</h1>
      <div className="list mt-8 px-3.5">
        <ul className="news-list space-y-4 flex flex-wrap gap-4">
          {DUMMY_NEWS.map((news) => (
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
      </div>
    </div>
  );
}
