import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const StvSingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/stvsingle');

export default StvSingle;