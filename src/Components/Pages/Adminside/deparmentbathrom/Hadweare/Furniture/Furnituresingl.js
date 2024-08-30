import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Furnituresingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/furnituresingle');

export default Furnituresingl;