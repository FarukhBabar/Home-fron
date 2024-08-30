import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Mopssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mopssingle');

export default Mopssingl;