"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageViewer(
  { imageSrc, altText } = { imageSrc: "", altText: "" }
) {
  const router = useRouter();

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
          src={imageSrc}
          alt={altText}
          className="max-w-full max-h-full object-cover"
          width={800}
          height={600}
        />
      </dialog>
    </>
  );
}
