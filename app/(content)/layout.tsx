import MainHeader from "@/components/main-header/main-header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="site-content">
      <MainHeader />
      {children}
    </div>
  );
}
