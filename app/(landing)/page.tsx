import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";

export default function Home() {
  return (
    <div id="home">
      <div className="hero-logo mt-8">
        <Image
          src={logo.src}
          alt="Next.js News Logo"
          className="mx-auto border rounded-full w-32 h-32"
          width={logo.width}
          height={logo.height}
        />
      </div>

      <h1 className="mt-[3rem] text-4xl font-bold text-center">
        Welcome to Next.js News
      </h1>

      <section className="site-content mt-8 text-center max-w-2xl mx-auto">
        <p className="mb-4 text-white">
          Next News is here to deliver you all the latest news - concise &
          unbiased!
        </p>

        <p className="mb-4 text-white">
          NextNews aims to provide you with the latest news in a concise and
          unbiased manner. We strive to deliver the news in a way that is easy
          to understand and to the point. We want to keep you informed without
          overwhelming you with unnecessary information.
        </p>

        <p className="mb-4 text-white">
          We employ a team of dedicated journalists who are committed to
          delivering the news in a fair and unbiased manner. Our team is
          passionate about keeping you informed and up to date with the latest
          news.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <Link
          href="/news"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Read the latest News
        </Link>
      </div>
    </div>
  );
}
