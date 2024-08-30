import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Mugscupssingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mugcupsingle');

export default Mugscupssingel;