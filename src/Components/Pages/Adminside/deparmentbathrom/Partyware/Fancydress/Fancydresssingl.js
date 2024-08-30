import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Fancydresssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Fancydresssingl;