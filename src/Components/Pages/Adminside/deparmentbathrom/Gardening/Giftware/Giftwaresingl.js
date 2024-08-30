import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Giftwaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/giftwaresingle');

export default Giftwaresingle;