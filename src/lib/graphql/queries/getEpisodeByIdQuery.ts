import { query } from 'astraql';

const GetEpisodeByIdQuery = query`
  Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;

export default GetEpisodeByIdQuery;