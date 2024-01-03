import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Input } from '~/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '~/components/ui/button';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


interface Props extends PropsWithChildren {
  title?: string;
  replaceTitle?: boolean;
}

export default function Layout({ children, title, replaceTitle }: Props) {
  return (
    <>
      <Head>
        {
          replaceTitle ? <title>{title}</title> : <title>Rick And Morty AstraQL {title && `- ${title}`}</title>
        }
      </Head>
      <div className={`max-w-screen min-h-screen flex flex-col gap-4 ${inter.className}`}>
        <header className='flex flex-row justify-between items-center p-4 bg-neutral-900'>
          <Button variant='link' className='mx-0 px-0 text-2xl'><Link href='/'>Rick and Morty GraphQL</Link></Button>
          <div className='relative'>
            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground'/>
            <Input placeholder='Search' className='pl-8'/>
          </div>
        </header>

        <main className='flex-grow flex flex-col w-full h-full p-4'>
          {children}
        </main>

        <footer className='h-14 bg-neutral-900 flex flex-row justify-evenly items-center'>
          <p>Created by <Button variant='link' className='mx-0 px-0 text-md'><a href='https://www.github.com/kazte'
                                                                                target='_blank'>kazte</a></Button>
          </p>
          <p>Using GraphQL and <Button variant='link' className='mx-0 px-0 text-md'><a
            href='https://github.com/sammwyy/AstraQL'
            target='_blank'>AstraQL</a></Button></p>
        </footer>
      </div>
    </>
  );
}