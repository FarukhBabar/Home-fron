import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Showersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/showersingle');

export default Showersingle;