"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavLinks() {
    const path = usePathname();

    const isActive = (href: string) => {
        return path === href || path.startsWith(href + "/");
    };

    const activeClass = "font-bold text-white";
    const inactiveClass = "hover:underline text-gray-200";

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/news" className={isActive("/news") ? activeClass : inactiveClass}>
            News
          </Link>
        </li>
        <li>
          <Link href="/archive" className={isActive("/archive") ? activeClass : inactiveClass}>
            Archive
          </Link>
        </li>
      </ul>
    </nav>
  );
}
