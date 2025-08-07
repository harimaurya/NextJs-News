export default function NotFoundPage() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>
    </div>
  );
}

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};
