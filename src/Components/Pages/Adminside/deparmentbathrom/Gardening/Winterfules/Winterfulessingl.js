import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Winterfulessingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/winterfulessingle');

export default Winterfulessingle;