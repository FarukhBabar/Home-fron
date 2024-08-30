import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Babysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/babeysingle');

export default Babysingle;