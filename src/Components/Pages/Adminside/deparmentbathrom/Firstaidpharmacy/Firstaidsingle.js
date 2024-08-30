import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Firstaidsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Firstaidsingle');

export default Firstaidsingle;