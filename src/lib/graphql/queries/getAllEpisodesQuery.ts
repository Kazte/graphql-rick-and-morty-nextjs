import { query } from 'astraql';

const GetAllEpisodesQuery = query`
  Episodes($page: Int) {
    episodes(page: $page) {
      info {
        prev
        next
      }
      results{
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
  }
`;

export default GetAllEpisodesQuery;