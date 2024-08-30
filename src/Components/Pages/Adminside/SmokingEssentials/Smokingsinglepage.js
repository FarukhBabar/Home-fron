import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Smokingsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/smokingsingalepage');

export default Smokingsinglepage;