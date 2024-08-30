import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Sportsbottelsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sportbottelsingle');

export default Sportsbottelsingel;