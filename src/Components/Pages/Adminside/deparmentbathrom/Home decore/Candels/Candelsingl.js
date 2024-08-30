import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Candelsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/candelsingle');

export default Candelsingl;