import {Linking} from 'react-native';

export const openURL = (url: string): void => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    })
    .catch(() => {});
};
