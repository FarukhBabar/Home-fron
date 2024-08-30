import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Obticalsigle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Obsticalsingle');

export default Obticalsigle;