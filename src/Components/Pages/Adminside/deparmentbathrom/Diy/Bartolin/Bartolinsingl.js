import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bartolinsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bartolinsingle');

export default Bartolinsingle;