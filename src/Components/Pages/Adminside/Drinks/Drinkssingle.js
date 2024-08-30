import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Drinkssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/drifreedeliverysingle');

export default Drinkssingle;