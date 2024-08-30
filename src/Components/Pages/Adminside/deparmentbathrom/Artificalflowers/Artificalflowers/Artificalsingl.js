import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Artificalsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/artificalsingle');

export default Artificalsingel;