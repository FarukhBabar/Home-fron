import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Crokerysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/crokerysingle');

export default Crokerysingl;