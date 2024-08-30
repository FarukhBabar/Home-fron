import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Baloonsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/baloonsingle');

export default Baloonsingl;