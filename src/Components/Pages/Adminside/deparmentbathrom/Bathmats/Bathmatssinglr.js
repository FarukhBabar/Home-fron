import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Bathmatssinglr = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bathmatessingle');

export default Bathmatssinglr;