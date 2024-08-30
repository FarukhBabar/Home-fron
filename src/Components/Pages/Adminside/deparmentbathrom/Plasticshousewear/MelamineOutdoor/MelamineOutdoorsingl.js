import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const MelamineOutdoorsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/melaminsingle');

export default MelamineOutdoorsingl;