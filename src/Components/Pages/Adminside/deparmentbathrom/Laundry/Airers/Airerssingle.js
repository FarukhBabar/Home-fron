import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Airerssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Airerssingle');

export default Airerssingle;