import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Birdbrandsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdbrandsingle');

export default Birdbrandsingle;