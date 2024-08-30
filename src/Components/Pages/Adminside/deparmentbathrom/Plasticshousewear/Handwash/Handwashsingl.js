import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Handwashsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/handwashsingle');

export default Handwashsingl;