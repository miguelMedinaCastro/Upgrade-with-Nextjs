import "./estilo.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Portfólio"
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="/script.js"></script>
      </head>
      <body className={`${inter.className} text-gray-800`}>
        { children }
      </body>
    </html>
  );
}
