import { query } from 'astraql';

const GetCharacterByIdQuery = query`
Character($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin{
      id
      name
    }
    location{
      id
      name
    }
    image
    episode{
      id
      name
      episode
    }
  }
}
`;

export default GetCharacterByIdQuery;