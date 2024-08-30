import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Healthcareesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/healthcareesingle');
export default Healthcareesingl;