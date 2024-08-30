import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Weedingsingal = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/weddingsingle');

export default Weedingsingal;