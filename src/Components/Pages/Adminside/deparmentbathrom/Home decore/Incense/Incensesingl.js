import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Incensesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/incensesingle');

export default Incensesingl;