import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Crystalsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/crystalsingle');

export default Crystalsingl;