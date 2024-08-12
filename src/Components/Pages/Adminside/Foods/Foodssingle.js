import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Foodssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/foodssingle');

export default Foodssingle;