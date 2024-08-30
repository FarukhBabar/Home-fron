import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Lighteningsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lighteningsingle');

export default Lighteningsingle;