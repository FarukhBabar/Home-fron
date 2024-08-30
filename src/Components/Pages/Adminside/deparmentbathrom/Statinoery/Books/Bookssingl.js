import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bookssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bookssingle');

export default Bookssingle;