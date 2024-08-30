import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const RentokilSingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/rentokilsingle');

export default RentokilSingle;