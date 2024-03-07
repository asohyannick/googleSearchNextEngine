import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Asoh Yannick Google Search API",
  description: "I have created a google search API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
