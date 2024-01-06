'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ICharacter } from '@/lib/services/character-service';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  character: ICharacter;
}

export default function CharacterCard({ character }: Props) {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`/character/${character.id}`}
                className='max-w-[350px] min-w-[200px] bg-neutral-900 p-4 flex flex-col justify-center items-center gap-2 border-2 border-transparent transition-all ease-out duration-300 hover:border-accent-foreground'>
            <h1 className='text-xl text-center line-clamp-1'>{character.name}</h1>

            {/*{!imageLoaded && <Skeleton className='w-[300px] h-[300px] rounded-none'/>}*/}
            <Image src={character.image} alt='Alt image' width={200} height={200} />

          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{character.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}