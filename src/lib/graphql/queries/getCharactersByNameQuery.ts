import { query } from 'astraql';

const GetCharactersByNameQuery = query`
Characters($name: String){
  characters(filter: {name: $name}) {
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

export default GetCharactersByNameQuery;