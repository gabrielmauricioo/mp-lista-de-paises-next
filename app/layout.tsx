import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from 'next/font/google'; // Removido 'Nunito'
import Image from "next/image";

// Usando apenas Nunito_Sans
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Uma lista de países criada com o Next13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="flex flex-col items-center bg-gray-100 min-h-screen">
          <nav className="flex items-center justify-center w-full bg-white h-16">
            <section className="flex items-center container gap-3">
              <Image 
                src="/logo.svg" 
                alt="Logo da aplicação - Emoji do planeta Terra" 
                width={48} 
                height={48}
              />
              <h1 className="font-bold text-2xl">Lista de países</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
