import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Carsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/carsingle');

export default Carsingle;