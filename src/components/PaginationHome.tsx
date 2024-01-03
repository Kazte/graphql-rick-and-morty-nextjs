import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '~/components/ui/pagination';


interface Props {
  prev?: number;
  next?: number;
  pathname?: string;
}

export default function PaginationHome({ prev, next, pathname = '/' }: Props) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem hidden={!Boolean(prev)}>
          <PaginationPrevious href={{
            pathname: pathname,
            query: { page: prev },
          }}/>
        </PaginationItem>
        <PaginationItem hidden={!Boolean(next)}>
          <PaginationNext href={{
            pathname: pathname,
            query: { page: next },
          }}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}