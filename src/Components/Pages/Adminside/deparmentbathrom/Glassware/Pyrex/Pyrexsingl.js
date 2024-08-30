import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Pyrexsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/pyrexsingle');

export default Pyrexsingl;