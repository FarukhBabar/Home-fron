import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Foodconsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/foodconsingle');

export default Foodconsingl;