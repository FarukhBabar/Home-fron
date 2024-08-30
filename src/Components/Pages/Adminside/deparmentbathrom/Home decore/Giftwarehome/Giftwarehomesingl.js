import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Giftwarehomesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/giftwarehsingle');

export default Giftwarehomesingl;