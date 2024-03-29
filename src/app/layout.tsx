import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty AstraQL',
  description: 'Nextjs app that consumes the Rick and Morty GraphQL API.',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={`${inter.className} dark flex flex-col min-h-screen max-w-screen gap-4`}>
    <NavBar/>

    <main className='flex-grow flex flex-col w-full h-full'>
      {children}
    </main>

    <footer className='h-14 bg-neutral-900 flex flex-row justify-evenly items-center justify-self-end'>
      <p>Created by <Button variant='link' className='mx-0 px-0 text-md'><a href='https://www.github.com/kazte'
                                                                            target='_blank'>kazte</a></Button>
      </p>
      <p>Using GraphQL and <Button variant='link' className='mx-0 px-0 text-md'><a
        href='https://github.com/sammwyy/AstraQL'
        target='_blank'>AstraQL</a></Button></p>
    </footer>
    </body>
    </html>
  );
}
