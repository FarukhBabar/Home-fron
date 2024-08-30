import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Birdsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdcaresingle');

export default Birdsingle;