import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bouquetsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bouquetsingle');

export default Bouquetsingl;