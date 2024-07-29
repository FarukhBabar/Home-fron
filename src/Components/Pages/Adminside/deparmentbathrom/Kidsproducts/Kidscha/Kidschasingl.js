
import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Kidschasingl = withDataFetching(SinglePage, 'https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/newarrsingle');

export default Kidschasingl;
