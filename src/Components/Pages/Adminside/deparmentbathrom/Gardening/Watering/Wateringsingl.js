import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Wateringsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/wateringsingle');

export default Wateringsingle;