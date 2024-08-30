import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Dorbellssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/doorbeelssingle');

export default Dorbellssingle;