import Link from "next/link";

export default function NewsPage() {
  return (
    <div id="news">
      <h1 className="mt-[3rem] text-4xl font-bold text-center">Latest News</h1>
      <div className="list mt-8">
        <ul className="space-y-4">
          <li>
            <Link href="/news/1" className="text-blue-500 hover:underline">
              News Article 1
            </Link>
          </li>
          <li>
            <Link href="/news/2" className="text-blue-500 hover:underline">
              News Article 2
            </Link>
          </li>
          <li>
            <Link href="/news/3" className="text-blue-500 hover:underline">
              News Article 3
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center mt-4">Click on a news article to read more.</p>
      <p className="text-center mt-2">This is a simple news page example.</p>
    </div>
  );
}