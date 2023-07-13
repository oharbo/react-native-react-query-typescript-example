import React, {useCallback, type ReactElement, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';
import {Theme, useTheme} from '@react-navigation/native';
import {UseQueryOptions, UseQueryResult} from '@tanstack/react-query/src/types';
import {useQuery} from '@tanstack/react-query';

import BaseText from '../components/primitives/BaseText';
import {PageComponent} from '../components/PageComponent';
import {primary} from '../common/colors';
import {text} from '../common/typography';
import {VehicleItem} from '../shared/lib/types';
import {vehiclesBaseUrl} from '../constants/apiConstants';
import {ITEM_HEIGHT} from '../constants/stylesConstants';
import RenderVehicleItem from '../components/RenderVehicleItemComponent';

/** FLATLIST HELPERS **/
const getItemLayout = (
  data: ArrayLike<VehicleItem> | null | undefined,
  index: number,
): {index: number; length: number; offset: number} => {
  return {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index};
};
const keyExtractor = (i: VehicleItem): string => {
  return `vehicle-${i?.id || Math.random()}-row`;
};

/** FUNCTIONALITY for FETCHING VEHICLE DATA LIST  **/
// I suppose these functions are meant to be placed in separate directory, but I decided
// to leave those here for easier readability of the code
function fetchVehiclesList(): Promise<UseQueryOptions> {
  return axios.get(`${vehiclesBaseUrl}vehicles`).then(res => res.data);
}
const useVehicleList = () =>
  useQuery({
    queryKey: ['vehicles'],
    queryFn: fetchVehiclesList,
  });

const VehicleListScreen = ({}) => {
  const {colors}: Theme = useTheme();
  const [search, setSearch] = useState<string>('');
  const [filteredDataSource, setFilteredDataSource] = useState<
    ArrayLike<VehicleItem>
  >([]);

  // @ts-ignore
  const {isLoading, error, data}: UseQueryResult<Array<VehicleItem>> =
    useVehicleList();

  // TODO: improve filtering functionality, add filtering w/ item.model
  // also, I would like to hightlight that UX for the local search is very basic
  // as the implementation was optional I didn't want to spend too much time on it
  const searchFilterFunction = (searchStr: string): void => {
    // Check if searched text is not blank
    // filter search will be performed with at least 2 entered symbols
    if (searchStr && searchStr.trim().length >= 2) {
      // Inserted searchStr is not blank
      // Filter the data
      // Update FilteredDataSource
      const newData = data?.filter(item => {
        const itemData = item.brand
          ? item.brand.toUpperCase()
          : ''.toUpperCase();
        const textData = searchStr.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      // had to use couple "ts-ignore" for the sake of time, apologies for that
      // @ts-ignore
      setFilteredDataSource(newData);
      setSearch(searchStr);
    } else if (searchStr && searchStr.trim().length < 2) {
      setSearch(searchStr);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with empty array
      setFilteredDataSource([]);
      setSearch('');
    }
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.inputCont}>
        <TextInput
          allowFontScaling={false}
          autoCorrect={false}
          autoFocus={false}
          enablesReturnKeyAutomatically
          inputMode={'text'}
          maxLength={8}
          placeholder={'Search by brand'}
          placeholderTextColor={colors.text}
          returnKeyType={'search'}
          testID={'local-search-textinput'}
          onChangeText={str => searchFilterFunction(str)}
          keyboardAppearance={'default'}
          style={[styles.input, {color: colors.text}]}
          value={search}
        />
      </View>
    );
  };

  const renderItem = useCallback(
    ({item}: {item: VehicleItem}): ReactElement => {
      return <RenderVehicleItem item={item} />;
    },
    [],
  );

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
  const dataToEnlist: ArrayLike<VehicleItem> | undefined =
    filteredDataSource && filteredDataSource.length ? filteredDataSource : data;
  return (
    <PageComponent useSafeAreaView edges={['bottom']} style={styles.container}>
      {data && renderSearchBar()}
      <FlatList
        data={dataToEnlist}
        getItemLayout={getItemLayout}
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
    paddingHorizontal: 4,
  },
  image: {marginRight: 12},
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: primary.grey,
    borderRadius: 12,
    height: 50,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputCont: {
    height: 36,
    marginTop: 6,
    paddingBottom: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: primary.grey,
  },
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
