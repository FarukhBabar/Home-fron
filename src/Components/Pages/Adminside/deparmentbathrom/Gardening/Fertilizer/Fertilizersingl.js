import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Fertilizersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/fertilizersingle');

export default Fertilizersingle;