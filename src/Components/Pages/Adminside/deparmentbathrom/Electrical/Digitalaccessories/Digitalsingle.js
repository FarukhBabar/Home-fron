import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Digitalsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/digitalsingle');

export default Digitalsingle;