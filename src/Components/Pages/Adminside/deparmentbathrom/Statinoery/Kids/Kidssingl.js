import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Kidssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidsssingle');

export default Kidssingle;