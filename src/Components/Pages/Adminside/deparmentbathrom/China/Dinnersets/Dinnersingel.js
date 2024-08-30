import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Dinnersingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/dinnersingle');

export default Dinnersingel;