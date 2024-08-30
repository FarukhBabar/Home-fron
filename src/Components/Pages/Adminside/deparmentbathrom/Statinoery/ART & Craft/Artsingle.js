import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Artsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/artcraftsingle');

export default Artsingle;