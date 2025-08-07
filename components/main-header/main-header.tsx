import Link from "next/link";
import NavLinks from "./nav-links";

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
            <li>
              <NavLinks href="/news">News</NavLinks>
            </li>
            <li>
              <NavLinks href="/archive">Archive</NavLinks>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
