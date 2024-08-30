
import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Flasksingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/flasksingle');

export default Flasksingl;