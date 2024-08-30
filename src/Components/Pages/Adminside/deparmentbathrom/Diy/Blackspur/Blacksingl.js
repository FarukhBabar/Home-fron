import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Blacksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/blacksingle');

export default Blacksingle;
