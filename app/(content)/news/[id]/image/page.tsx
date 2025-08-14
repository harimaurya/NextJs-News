import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const newsItem = getNewsItem(id);

    if (!newsItem) {
      return notFound();
    }

  return (
    <div className="image-page w-full h-full flex items-center justify-center">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        className="max-w-full max-h-full object-cover"
        width={800}
        height={600}
      />
    </div>
  );
}
