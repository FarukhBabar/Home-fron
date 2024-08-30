import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bbqsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bbqsingle');

export default Bbqsingle;