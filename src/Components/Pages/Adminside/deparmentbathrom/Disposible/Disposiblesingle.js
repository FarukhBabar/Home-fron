import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Disposiblesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/disposiblesingle');

export default Disposiblesingle;