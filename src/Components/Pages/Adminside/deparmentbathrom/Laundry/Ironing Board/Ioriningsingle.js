import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Ioriningsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/ironingsingle');

export default Ioriningsingle;