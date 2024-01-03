import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function NavBar() {
  return (
    <header className='flex flex-row justify-between items-center p-4 bg-neutral-900'>
      <Button variant='link' className='mx-0 px-0 text-2xl'><Link href='/'>Rick and Morty GraphQL</Link></Button>
      <div className='relative'>
        <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground'/>
        <Input placeholder='Search' className='pl-8'/>
      </div>
    </header>
  );
}
