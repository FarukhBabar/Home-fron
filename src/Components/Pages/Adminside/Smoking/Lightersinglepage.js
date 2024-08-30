import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Lightersinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lightersingalepage');

export default Lightersinglepage;