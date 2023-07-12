import React, {useCallback, type ReactElement} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import {UseQueryOptions, UseQueryResult} from '@tanstack/react-query/src/types';
import {type StackNavigationProp} from '@react-navigation/stack';
import {Theme, useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';

import BaseText from '../components/primitives/BaseText';
import {ICONS_SRC} from '../constants/assetsConstants';
import {PageComponent} from '../components/PageComponent';
import {primary} from '../common/colors';
import {text} from '../common/typography';
import {
  RootStackParamList,
  ScreenNames,
} from '../constants/screenNamesConstants';
import {VehicleItem} from '../shared/lib/types';
import {vehiclesBaseUrl} from '../constants/apiConstants';

const VehicleListScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {colors}: Theme = useTheme();
  const tintColor: string = colors.text;

  function fetchVehiclesList(): Promise<UseQueryOptions> {
    return axios.get(`${vehiclesBaseUrl}vehicles`).then(res => res.data);
  }

  const {isLoading, error, data}: UseQueryResult<Array<VehicleItem>> = useQuery(
    {
      queryKey: ['vehicles'],
      queryFn: fetchVehiclesList,
    },
  );

  const onItemPress = useCallback(
    (item: VehicleItem) => {
      navigation.navigate(ScreenNames.vehicleDetailScreen, {item});
    },
    [navigation],
  );
  // room for improvement: adding more detailed comparison from item memoization
  const renderItem = useCallback(
    ({item}: {item: VehicleItem}): ReactElement => {
      const imageSrc: ImageSourcePropType = ICONS_SRC[item.category];
      const tColor: {tintColor: string} = {tintColor};

      return (
        <Pressable
          style={styles.itemContainer}
          key={`vehicle-${item.id}`}
          onPress={() => {
            onItemPress(item);
          }}>
          <Image source={imageSrc} style={[styles.image, tColor]} />
          <View>
            <BaseText style={styles.brandLabel} text={`Brand: ${item.brand}`} />
            <BaseText style={styles.modelLabel} text={`Model: ${item.model}`} />
            <BaseText
              style={styles.modelLabel}
              text={`Version: ${item.version}`}
            />
          </View>
        </Pressable>
      );
    },
    [onItemPress, tintColor],
  );

  const keyExtractor = (i: VehicleItem): string => {
    return `vehicle-${i?.id || Math.random()}-row`;
  };

  if (isLoading) {
    return (
      <PageComponent useSafeAreaView edges={['bottom']}>
        <BaseText style={styles.label} text={'Loading...'} />
      </PageComponent>
    );
  }

  if (error) {
    return (
      <PageComponent useSafeAreaView edges={['bottom']}>
        <BaseText style={styles.label} text={'Error getting vehicle fleet'} />
      </PageComponent>
    );
  }

  const refreshing: boolean = !!(data && isLoading);

  return (
    <PageComponent useSafeAreaView edges={['bottom']} style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        refreshControl={<RefreshControl refreshing={refreshing} />}
        refreshing={refreshing}
        renderItem={renderItem}
      />
    </PageComponent>
  );
};

const styles = StyleSheet.create({
  brandLabel: {
    fontWeight: '500',
    fontSize: text.t7,
  },
  modelLabel: {
    fontSize: text.t5,
  },
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 4,
  },
  image: {marginRight: 12},
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: primary.grey,
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
export default VehicleListScreen;
