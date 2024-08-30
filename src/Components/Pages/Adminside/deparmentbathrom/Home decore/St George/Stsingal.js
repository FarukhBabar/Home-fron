import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Stsingal = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/stsingle');

export default Stsingal;