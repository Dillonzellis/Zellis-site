import { EB_Garamond } from "next/font/google";
import "./globals.css";

<link rel="icon" href="/zellis_logo_red.png" sizes="any" />;

export const metadata = {
  title: "Zellis",
  description: "Two groove dawg brothers funkin out in the streets",
};

const eb = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eb.className}>
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
