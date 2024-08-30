import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Luggagesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/luggagesingle');

export default Luggagesingl;