import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Basketstsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bascktsingle');

export default Basketstsingle;