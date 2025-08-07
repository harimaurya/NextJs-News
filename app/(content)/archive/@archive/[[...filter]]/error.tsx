"use client";

export default function ArchiveErrorPage({error}: {error: Error}) {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold">Error - Article Not Found</h1>
      <p className="mt-2">{error?.message || "The article you are looking for does not exist."}</p>
    </div>
  );
}