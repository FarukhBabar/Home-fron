import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Glassvasssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glassvasssingle');

export default Glassvasssingl;