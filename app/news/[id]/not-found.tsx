export default function NotFoundPage() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold">404 - Article Not Found</h1>
      <p className="mt-2">The article you are looking for does not exist.</p>
    </div>
  );
}

export const metadata = {
  title: "Article Not Found",
  description: "The article you are looking for does not exist.",
};
