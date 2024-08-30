import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Mirrorsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mirrorsingle');

export default Mirrorsinglepage;
