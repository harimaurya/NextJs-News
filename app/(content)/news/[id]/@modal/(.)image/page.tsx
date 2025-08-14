import ImageViewer from "@/components/image-viewer/image-viewer";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const newsItem = getNewsItem(id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <ImageViewer
        imageSrc={`/images/news/${newsItem.image}`}
        altText={newsItem.title}
      />
    </>
  );
}
