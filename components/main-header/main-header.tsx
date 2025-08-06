import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div id="logo" className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            Next.js News
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/news" className="hover:underline">News</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}