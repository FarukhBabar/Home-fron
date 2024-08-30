import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Kidsplassingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidsplassingle');

export default Kidsplassingl;