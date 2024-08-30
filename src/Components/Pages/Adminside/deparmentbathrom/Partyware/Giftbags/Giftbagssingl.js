import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Giftbagssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Giftbagssingl;