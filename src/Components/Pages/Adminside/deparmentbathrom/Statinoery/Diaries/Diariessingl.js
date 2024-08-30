
import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Diariessingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/diariessingle');

export default Diariessingle;