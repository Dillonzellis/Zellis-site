import "./globals.css";

export const metadata = {
  title: "Zellis",
  description: "Two groove dawg brothers funkin out in the streets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
