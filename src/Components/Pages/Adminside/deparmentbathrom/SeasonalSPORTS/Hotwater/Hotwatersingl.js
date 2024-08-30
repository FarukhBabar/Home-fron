import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Hotwatersingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hotwatersingle');

export default Hotwatersingel;