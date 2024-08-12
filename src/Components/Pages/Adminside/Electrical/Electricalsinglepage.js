


import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Electricalsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/elefreedelivery');

export default Electricalsinglepage;