import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Fatherdayssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/fathersdaysingle');

export default Fatherdayssingl;