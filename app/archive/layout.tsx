export default function ArchiveLayout({ archive, latest }: { archive: React.ReactNode; latest: React.ReactNode }) {
  return (
    <div className="archive-layout px-4">
        <h1 className="text-3xl font-bold mt-4">News Archive</h1>
        <section className="archive-list mt-4">
            {archive}
        </section>
        <hr className="my-8 border-t" />
        <section className="latest-news mt-8">
            {latest}
        </section>
    </div>
  );
}

export const metadata = {
  title: "Archive",
  description: "This is the archive page.",
};  