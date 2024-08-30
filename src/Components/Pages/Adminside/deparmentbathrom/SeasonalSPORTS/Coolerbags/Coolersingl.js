import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Coolersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sportsingle');

export default Coolersingl;