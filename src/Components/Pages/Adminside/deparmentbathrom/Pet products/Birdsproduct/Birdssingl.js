import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Birdssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdssingle');

export default Birdssingl;