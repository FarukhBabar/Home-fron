import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Newarrivalsingr = withDataFetching(SinglePage, 'http://srv577826.hstgr.cloud:8002/api/v1/data/newarrsingle');

export default Newarrivalsingr;