import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Candlessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Candlessingl;