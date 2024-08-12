import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Newarrivalsingr = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/newarrsingle');

export default Newarrivalsingr;