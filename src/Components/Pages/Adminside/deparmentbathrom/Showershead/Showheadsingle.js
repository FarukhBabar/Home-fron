import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Showheadsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/showheadsingle');

export default Showheadsingle;