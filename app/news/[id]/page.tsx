import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const newsItem = DUMMY_NEWS.find((news) => news.id === id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <article id="news-detail" className="news-article">
      <header>
        <div className="article-image flex justify-center">
          <Link href={`/news/${newsItem.id}/image`} className="block">
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              className="w-xl object-cover mb-4"
              width={800}
              height={600}
            />
          </Link>
        </div>
        <div className="article-content p-4">
          <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </div>
      </header>
      <div className="article-body p-4">
        <p className="text-white">{newsItem.content}</p>
      </div>
    </article>
  );
}
