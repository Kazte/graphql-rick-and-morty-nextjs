'use client';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    const query = e.target[0].value;
    // @ts-ignore
    router.push(`/search?query=${query}`);
  };


  return (
    <header className='flex flex-row justify-between items-center p-4 bg-neutral-900'>
      <Button variant='link' className='mx-0 px-0 text-2xl'><Link href='/'>Rick and Morty GraphQL</Link></Button>
      <nav className='flex flex-row gap-6'>
        <div className='flex flex-row gap-3'>
          <Button variant='link' className='mx-0 px-0 text-lg'><Link href='/episode'>Episodes</Link></Button>
          <Button variant='link' className='mx-0 px-0 text-lg'><Link href='/location'>Locations</Link></Button>
        </div>
        <form className='relative' onSubmit={handleSubmit}>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground'/>
          <Input placeholder='Search' className='pl-8'/>
        </form>
      </nav>
    </header>
  );
}
