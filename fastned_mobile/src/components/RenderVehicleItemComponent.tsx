import React, {useCallback, type ReactElement, memo} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {type StackNavigationProp} from '@react-navigation/stack';
import {Theme, useNavigation, useTheme} from '@react-navigation/native';

import BaseText from '../components/primitives/BaseText';
import {ICONS_SRC} from '../constants/assetsConstants';
import {ITEM_HEIGHT} from '../constants/stylesConstants';
import {primary} from '../common/colors';
import {text} from '../common/typography';
import {
  RootStackParamList,
  ScreenNames,
} from '../constants/screenNamesConstants';
import {VehicleItem} from '../shared/lib/types';

const RenderVehicleItem = ({item}: {item: VehicleItem}): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {colors}: Theme = useTheme();
  const tintColor: string = colors.text;
  const imageSrc: ImageSourcePropType = ICONS_SRC[item.category];
  const tColor: {tintColor: string} = {tintColor};

  const onItemPress = useCallback(
    (it: VehicleItem) => {
      navigation.navigate(ScreenNames.vehicleDetailScreen, {item: it});
    },
    [navigation],
  );
  console.log('render item');

  return (
    <Pressable
      style={styles.itemContainer}
      key={`vehicle-${item.id}`}
      testID={`vehicle-${item.id}`}
      onPress={() => {
        onItemPress(item);
      }}>
      <Image source={imageSrc} style={[styles.image, tColor]} />
      <View>
        <BaseText style={styles.brandLabel} text={`Brand: ${item.brand}`} />
        <BaseText style={styles.modelLabel} text={`Model: ${item.model}`} />
        <BaseText style={styles.modelLabel} text={`Version: ${item.version}`} />
      </View>
    </Pressable>
  );
};

interface Props {
  item: VehicleItem;
}

function arePropsEqual(prevProps: Props, nextProps: Props) {
  // return true if passing nextProps to render would return
  // the same result as passing prevProps to render,
  // otherwise return false
  return (
    nextProps.item.id === prevProps.item.id &&
    nextProps.item.brand === prevProps.item.brand &&
    nextProps.item.model === prevProps.item.model &&
    nextProps.item.version === prevProps.item.version
  );
}

const styles = StyleSheet.create({
  brandLabel: {
    fontWeight: '500',
    fontSize: text.t7,
  },
  modelLabel: {
    fontSize: text.t5,
  },
  image: {marginRight: 12},
  itemContainer: {
    height: ITEM_HEIGHT,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: primary.grey,
  },
});

export default memo(RenderVehicleItem, arePropsEqual);
