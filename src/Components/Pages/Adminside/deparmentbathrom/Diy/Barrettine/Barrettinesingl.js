import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Barrettinesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/barrientsingle');

export default Barrettinesingle;