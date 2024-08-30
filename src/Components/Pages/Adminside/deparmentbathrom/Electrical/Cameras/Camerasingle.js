import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Camerasingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/camerasingle');

export default Camerasingle;