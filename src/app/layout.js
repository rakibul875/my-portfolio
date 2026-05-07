import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "DEV_ARCHITECT | Portfolio",
  description: "Architecting high-performance web ecosystems with mathematical precision and aesthetic excellence.",
  keywords: ["portfolio", "developer", "architect", "web development", "software engineering"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-surface-dim text-on-surface font-body-md selection:bg-primary-container selection:text-white flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
