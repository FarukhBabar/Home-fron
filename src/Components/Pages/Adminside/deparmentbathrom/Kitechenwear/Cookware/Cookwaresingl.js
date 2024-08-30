import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Cookwarsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/cookwarsingle');

export default Cookwarsingl;