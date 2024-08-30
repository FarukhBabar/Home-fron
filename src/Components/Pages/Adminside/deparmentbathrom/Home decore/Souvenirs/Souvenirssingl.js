import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Souvenirssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/souvenirssingle');

export default Souvenirssingl;