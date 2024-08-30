import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Plasticcabnitsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/plasticcabnitsingle');

export default Plasticcabnitsingl;