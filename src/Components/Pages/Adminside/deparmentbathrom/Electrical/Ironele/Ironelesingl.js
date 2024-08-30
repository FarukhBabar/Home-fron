import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Ironelesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/ironelesingle');

export default Ironelesingle;