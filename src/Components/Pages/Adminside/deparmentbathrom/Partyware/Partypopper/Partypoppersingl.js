
import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Partypoppersingl = withDataFetching(SinglePage, 'https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/bannersingle');

export default Partypoppersingl;
