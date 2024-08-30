import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Crockerysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Crockerysingle');

export default Crockerysingle;