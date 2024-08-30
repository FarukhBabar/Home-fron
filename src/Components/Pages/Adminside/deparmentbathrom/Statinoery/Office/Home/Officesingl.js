import withDataFetching from '../../../../../../withDataFetching';
import SinglePage from '../../../../../../SinglePage';

const Officesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/officesingle');

export default Officesingle;