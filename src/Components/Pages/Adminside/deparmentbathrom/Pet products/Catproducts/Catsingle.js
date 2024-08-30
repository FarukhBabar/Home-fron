import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Catsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/catsingle');

export default Catsingle;