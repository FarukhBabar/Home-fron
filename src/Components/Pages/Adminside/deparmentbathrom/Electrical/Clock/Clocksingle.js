import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Clocksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Clocksingle');

export default Clocksingle;