import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
    const years = getAvailableNewsYears();

  return (
    <div className="mt-4">
      <header id="archive-header">
        <nav>
            <ul className="flex gap-4">
                {years.map((year) => (
                    <li key={year}>
                        <Link href={`/archive/${year}`} className="text-gray-200 hover:underline hover:text-white">
                            {year}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
      </header>
    </div>
  );
}

export const metadata = {
  title: "Archive",
  description: "This is the archive page.",
};