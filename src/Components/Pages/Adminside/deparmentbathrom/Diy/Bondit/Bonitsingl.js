import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bonitsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bonitsingle');

export default Bonitsingle;