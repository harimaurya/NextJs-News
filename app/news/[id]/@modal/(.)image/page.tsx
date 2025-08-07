"use client";

import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";


export default function InterceptedImagePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const { id } = params;
  const newsItem = DUMMY_NEWS.find((news) => news.id === id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <div
        className="modal-backdrop fixed inset-0 bg-black opacity-50"
        onClick={router.back}
      ></div>
      <dialog
        className="modal-content m-auto fixed inset-0 flex items-center justify-center"
        open
      >
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="max-w-full max-h-full object-cover"
          width={800}
          height={600}
        />
      </dialog>
    </>
  );
}
