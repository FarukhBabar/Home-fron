import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Klinersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/klinersingle');

export default Klinersingl;