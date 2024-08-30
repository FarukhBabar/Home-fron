import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Phonesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Phonesingle');

export default Phonesingle;