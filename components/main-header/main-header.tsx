import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Next.js News</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/news" className="hover:underline">News</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}