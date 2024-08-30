import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bagssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bagslsingle');

export default Bagssingle;