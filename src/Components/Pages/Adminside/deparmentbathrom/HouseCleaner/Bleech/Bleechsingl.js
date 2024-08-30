import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bleechsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bleechsingle');

export default Bleechsingl;