import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Campingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/campingsingle');

export default Campingsingle;