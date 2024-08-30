import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Toolsaccesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/toolssingle');

export default Toolsaccesingle;