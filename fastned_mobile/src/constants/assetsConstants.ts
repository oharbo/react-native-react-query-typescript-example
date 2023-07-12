import {ImageSourcePropType} from 'react-native';
interface IconSrc {
  [index: string]: ImageSourcePropType;
}
export const ICONS_SRC: IconSrc = {
  CAR: require('../assets/icons8-car.png'),
  VAN: require('../assets/icons8-van.png'),
  MOTORCYCLE: require('../assets/icons8-motorcycle.png'),
  undefined: require('../assets/icons8-hot-air-balloon.png'),
  OPEN_URL: require('../assets/open-link.png'),
};
