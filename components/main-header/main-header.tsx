import Link from "next/link";
import MainNavLinks from "./main-nav";

export default function MainHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div id="logo" className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            Next.js News
          </Link>
        </div>
        <MainNavLinks />
      </div>
    </header>
  );
}