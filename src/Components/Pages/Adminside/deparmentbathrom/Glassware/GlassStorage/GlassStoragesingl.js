import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const GlassStoragesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glassstoragesingle');

export default GlassStoragesingl;