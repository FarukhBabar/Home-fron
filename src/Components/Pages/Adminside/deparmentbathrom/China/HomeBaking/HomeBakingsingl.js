import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const HomeBakingsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/homebakingsingle');

export default HomeBakingsingel;