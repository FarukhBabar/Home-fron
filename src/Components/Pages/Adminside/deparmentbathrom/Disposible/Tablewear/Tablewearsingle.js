import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Tablewearsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Tablewearsingle');

export default Tablewearsingle;