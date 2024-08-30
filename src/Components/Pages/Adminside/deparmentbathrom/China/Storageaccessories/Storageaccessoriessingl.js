import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Storageaccessoriessingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/storageaccesssingle');

export default Storageaccessoriessingel;