import { NewsItem } from "@/data/news";
import sql from "better-sqlite3";

const db = sql("data.db");

export function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  return news as NewsItem[];
}

export function getNewsItem(slug: string) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
  return newsItem as NewsItem | undefined;
}

export function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  return latestNews as NewsItem[];
}

export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all();

  return years.map((year) => year.year);
}

export function getAvailableNewsMonths(year:string) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export function getNewsForYear(year:string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    ) 
    .all(year);

  return news as NewsItem[];
}

export function getNewsForYearAndMonth(year:string, month:string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  return news as NewsItem[];
}
