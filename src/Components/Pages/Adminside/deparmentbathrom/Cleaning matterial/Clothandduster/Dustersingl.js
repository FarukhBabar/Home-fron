import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Dustersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/brushwaresingle');

export default Dustersingl;