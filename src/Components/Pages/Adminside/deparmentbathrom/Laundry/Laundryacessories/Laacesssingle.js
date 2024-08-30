import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Laacesssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Loundrysingle');

export default Laacesssingle;