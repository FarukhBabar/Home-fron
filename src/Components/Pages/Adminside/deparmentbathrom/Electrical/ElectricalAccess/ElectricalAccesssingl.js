import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const ElectricalAccesssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/eleaccessoriessingle');

export default ElectricalAccesssingle;