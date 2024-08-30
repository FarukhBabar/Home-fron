import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Furniturlist = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/furnitursingle');

export default Furniturlist;