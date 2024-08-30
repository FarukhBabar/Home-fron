import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Picnicsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/picnicsingle');

export default Picnicsingel;