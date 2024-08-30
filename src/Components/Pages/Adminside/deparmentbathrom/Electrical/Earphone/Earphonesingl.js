import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Earphonesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/earephonesingle');

export default Earphonesingle;