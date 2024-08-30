import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const DrinkingGlasssingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/drinkingglasssingle');

export default DrinkingGlasssingel;