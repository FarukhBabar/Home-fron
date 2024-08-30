import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bannersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Bannersingl;