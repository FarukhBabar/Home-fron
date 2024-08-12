
import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Palletsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/palletsingle');

export default Palletsingle;