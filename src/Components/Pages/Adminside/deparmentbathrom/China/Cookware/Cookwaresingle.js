import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Cookwaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Cookwaresingle');

export default Cookwaresingle;