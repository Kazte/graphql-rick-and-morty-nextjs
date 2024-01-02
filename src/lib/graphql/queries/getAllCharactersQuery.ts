import { query } from 'astraql';

const GetAllCharactersQuery = query`
Characters($page: Int){
  characters(page: $page) {
    info {
      next
      prev
    }
    results {
      id
      name
      image
    }
  }
}
`;

export default GetAllCharactersQuery;