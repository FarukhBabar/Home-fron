import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Singlestemsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/singlestemsingle');

export default Singlestemsingl;