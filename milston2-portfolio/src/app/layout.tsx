import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}


