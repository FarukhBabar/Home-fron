


import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Electricalsinglepage = withDataFetching(SinglePage, 'http://srv577826.hstgr.cloud:8002/api/v1/data/elefreedelivery');

export default Electricalsinglepage;