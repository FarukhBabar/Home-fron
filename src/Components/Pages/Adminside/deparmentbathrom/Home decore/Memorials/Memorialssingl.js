import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Memorialssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/memorialsingle');

export default Memorialssingl;