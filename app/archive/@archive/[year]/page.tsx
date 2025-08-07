import NewsList from "@/components/news-list/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredArchivePage({
  params,
}: {
  params: { year: string };
}) {
  const { year } = await params;
  const news = getNewsForYear(+year);
  return <NewsList news={news} />;
}

export const metadata = {
  title: "Filtered Archive",
  description: "This is the filtered archive page.",
};
