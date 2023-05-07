import { Poppins } from "next/font/google";
import "./globals.css";

<link rel="icon" href="/zellis_logo_red.png" sizes="any" />;

export const metadata = {
  title: "Zellis",
  description: "Two groove dawg brothers funkin out in the streets",
};

const poppins = Poppins({
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
    <html lang="en" className={poppins.className}>
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
