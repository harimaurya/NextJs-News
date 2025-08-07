"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  const isActive = (href: string) => {
    return path === href || path.startsWith(href + "/");
  };

  const activeClass = "font-bold text-white";
  const inactiveClass = "hover:underline text-gray-200";

  return (
    <Link
      href={href}
      className={isActive(href) ? activeClass : inactiveClass}
    >
      {children}
    </Link>
  );
}
