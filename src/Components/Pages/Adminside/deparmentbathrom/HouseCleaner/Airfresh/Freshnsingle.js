import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Freshnsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/freshnsingle');

export default Freshnsingle;