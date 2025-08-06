export default async function NewsDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const articleId = id;

  return (
    <div id="news-detail">
      <h1 className="mt-[3rem] text-4xl font-bold text-center">News Detail</h1>
      <p className="text-center mt-4">Article ID: {articleId}</p>
    </div>
  );
}
