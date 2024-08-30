import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Framsmirrorsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/frammirrorsingle');

export default Framsmirrorsingl;