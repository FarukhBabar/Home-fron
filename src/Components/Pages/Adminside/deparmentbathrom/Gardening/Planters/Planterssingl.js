import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Planterssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/planterssingle');

export default Planterssingle;