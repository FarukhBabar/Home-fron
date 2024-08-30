import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Spongesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/spongesingle');

export default Spongesingl;