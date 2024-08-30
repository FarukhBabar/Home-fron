import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Growingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/growingsingle');

export default Growingsingle;