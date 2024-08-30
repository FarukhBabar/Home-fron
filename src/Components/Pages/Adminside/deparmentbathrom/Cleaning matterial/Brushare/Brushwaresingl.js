import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Brushwaresingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/brushwaresingle');

export default Brushwaresingel;