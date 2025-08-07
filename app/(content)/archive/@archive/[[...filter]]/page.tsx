import NewsList from "@/components/news-list/news-list";
import { NewsItem } from "@/data/news";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredArchivePage({
  params,
}: {
  params: { filter: string[] };
}) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: NewsItem[] = [];
  let newsContent = (
    <p className="text-gray-400">
      No news found. Please select a filter above.
    </p>
  );

  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear);
    links = getAvailableNewsMonths(+selectedYear);
  } 
  
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
  }

  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if( (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) || (selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))) {
    throw new Error("Invalid filter.");
  }

  return (
    <section id="filtered-archive" className="mt-4">
      <header id="archive-header" className="mb-4">
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => {

              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link
                    href={href}
                    className="text-gray-200 hover:underline hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </section>
  );
}

export const metadata = {
  title: "Filtered Archive",
  description: "This is the filtered archive page.",
};
