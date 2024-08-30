import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Metalbucksingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/metalbucksingle');

export default Metalbucksingel;