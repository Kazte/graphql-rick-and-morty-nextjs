import { query } from 'astraql';

const GetAllCharactersByNameQuery = query`
Characters($name: String, $page: Int){
  characters(filter: {name: $name}, page: $page) {
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

export default GetAllCharactersByNameQuery;