import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Garlandssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/garlandsingle');

export default Garlandssingl;