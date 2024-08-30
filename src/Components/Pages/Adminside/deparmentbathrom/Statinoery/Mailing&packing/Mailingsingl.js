import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Mailingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mailingsingle');

export default Mailingsingle;