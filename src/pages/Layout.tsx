import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Input } from '~/components/ui/input';
import { Search } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={`max-w-screen min-h-screen flex flex-col gap-4 ${inter.className}`}>
      <header className='flex flex-row justify-between items-center p-4 bg-neutral-900'>
        <h1 className='text-2xl'>Rick and Morty GraphQL</h1>
        <div className='relative'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground'/>
          <Input placeholder='Search' className='pl-8'/>
        </div>
      </header>

      <main className='flex-grow flex flex-col w-full h-full'>
        {children}
      </main>
    </div>
  );
}