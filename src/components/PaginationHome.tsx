'use client';

import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from './ui/pagination';
import { cn } from '@/lib/utils';
import { router } from 'next/client';


interface Props {
  prev?: number;
  next?: number;
  pathname?: string;
  query?: any;
}

export default function PaginationHome({ prev, next, pathname = '/', query }: Props) {

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious className={cn(Boolean(prev) ? 'flex' : 'hidden')} prefetch={false} href={{
          pathname: pathname,
          query: { ...query, page: prev },
        }}/>
        <PaginationNext className={cn(Boolean(next) ? 'flex' : 'hidden')} prefetch={false} href={{
          pathname: pathname,
          query: { ...query, page: next },
        }}/>
      </PaginationContent>
    </Pagination>
  );
}