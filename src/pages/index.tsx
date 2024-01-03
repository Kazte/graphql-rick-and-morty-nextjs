import { Inter } from 'next/font/google';
import { Button } from '~/components/ui/button';
import { Suspense, useCallback, useEffect, useState, useTransition } from 'react';
import { getAllCharacters, ICharacter, IQueryResult } from '~/lib/services/character-service';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { query } from 'astraql';
import Loader from '~/components/Loader';
import { wait } from 'next/dist/lib/wait';
import { ArrowBigLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import CharacterCard from '~/components/CharacterCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem, PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '~/components/ui/pagination';
import Layout from '~/pages/Layout';
import PaginationHome from '~/components/PaginationHome';


export default function Home() {

  const router = useRouter();
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [queryInfo, setQueryInfo] = useState<IQueryResult>();
  const [currentPage, setCurrentPage] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = async (page: number) => {
    setIsFetching(true);

    if (page !== undefined) {
      const data = await getAllCharacters(page);
      setCharacters(data.results);
      setQueryInfo(data.info);
    } else {
      const data = await getAllCharacters(1);
      setCharacters(data.results);
      setQueryInfo(data.info);
    }
  };

  useEffect(() => {
    const page = router.query.page;

    fetchData(parseInt(page as string)).then(data => {
      setIsFetching(false);
    });
  }, [router.query.page]);


  return (
    <Layout title='Home'>
      <section className='h-full flex flex-col gap-6 flex-grow'>
        <Loader loaded={!isFetching && Boolean(queryInfo) && Boolean(characters)} className='items-center flex-grow'>
          <h1 className='text-5xl text-center'>All Characters</h1>
          {
            characters && (
              <ul className='flex flex-row flex-wrap justify-center gap-6'>
                {
                  characters.map((character) => (
                    <CharacterCard character={character} key={character.id}/>
                  ))
                }
              </ul>
            )
          }
          <div className='w-full flex flex-row justify-evenly items-center'>
            <PaginationHome prev={queryInfo?.prev} next={queryInfo?.next}/>
          </div>
        </Loader>

      </section>
    </Layout>
  );
}
