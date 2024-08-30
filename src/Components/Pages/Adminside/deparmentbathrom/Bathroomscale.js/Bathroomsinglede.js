import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Bathroomsinglede = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bathroomdesingle');

export default Bathroomsinglede;