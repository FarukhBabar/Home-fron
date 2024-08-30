import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Glovessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glovessingle');

export default Glovessingl;