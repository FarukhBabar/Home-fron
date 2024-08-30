import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Batteriessinge = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Batteriessingle');

export default Batteriessinge;