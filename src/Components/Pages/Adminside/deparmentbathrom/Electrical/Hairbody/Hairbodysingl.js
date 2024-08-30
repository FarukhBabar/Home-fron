import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Hairbodysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hairbodysingle');

export default Hairbodysingle;