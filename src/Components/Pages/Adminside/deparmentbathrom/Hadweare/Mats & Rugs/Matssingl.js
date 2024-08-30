import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Matssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/matessingle');

export default Matssingl;