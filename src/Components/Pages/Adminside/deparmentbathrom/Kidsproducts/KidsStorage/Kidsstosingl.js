import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Kidsstosingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidssingle');

export default Kidsstosingl;