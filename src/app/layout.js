import "./globals.css";

export const metadata = {
  title: "Yusuf Marcelino — Web Developer & Creative Designer",
  description: "Portofolio resmi Yusuf Marcelino - Web Developer & Creative Designer.",
  icons: {
    icon: "/images/favicons/ymi.ico",
    shortcut: "/images/favicons/ymi.ico",
    apple: "/images/favicons/ymi.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
