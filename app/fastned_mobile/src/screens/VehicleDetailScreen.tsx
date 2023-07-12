import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {UseQueryOptions, UseQueryResult} from '@tanstack/react-query/src/types';
import {type RouteProp, useRoute} from '@react-navigation/core';
import {useQuery} from '@tanstack/react-query';

import BaseText from '../components/primitives/BaseText';
import {ICONS_SRC} from '../constants/assetsConstants';
import {
  RootStackParamList,
  ScreenNames,
} from '../constants/screenNamesConstants';
import {VehicleDetails} from '../shared/lib/types';
import {openURL} from '../utils/canOpenUrl.util';
import {textColor} from '../common/colors';
import {spacing} from '../common/spacing';
import {text} from '../common/typography';
import {vehiclesBaseUrl} from '../constants/apiConstants';
import {PageComponent} from '../components/PageComponent';

const VehicleDetailScreen = ({}) => {
  const route =
    useRoute<RouteProp<RootStackParamList, ScreenNames.vehicleDetailScreen>>();
  const {item} = route.params;

  interface Options {
    queryKey: [string];
  }
  function fetchVehiclesDetails(options: Options): Promise<UseQueryOptions> {
    const queryKey = options.queryKey;
    return axios.get(`${vehiclesBaseUrl}${queryKey[0]}`).then(res => res.data);
  }
  const {isLoading, error, data}: UseQueryResult<VehicleDetails> = useQuery({
    queryKey: [`vehicles/${item.id}`],
    queryFn: fetchVehiclesDetails,
    enabled: !!item.id,
  });

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
  if (data) {
    return (
      <PageComponent
        style={styles.itemContainer}
        useSafeAreaView
        edges={['bottom']}>
        <Image
          source={{uri: item.imageUrl || data.imageUrl}}
          style={styles.image}
        />
        <View>
          <BaseText
            style={styles.brandLabel}
            text={`Brand: ${item.brand || data.brand}`}
          />
          <BaseText
            style={styles.brandLabel}
            text={`Model: ${item.model || data.model}`}
          />
          <BaseText
            style={styles.brandLabel}
            text={`Version: ${item.version || data.version}`}
          />
          {data ? (
            <View>
              <BaseText
                style={styles.brandLabel}
                text={`Connector Type: ${data.connectorType}`}
              />
              <BaseText
                style={styles.brandLabel}
                text={`Recommended Charger: ${data.recommendedCharger}`}
              />
              <Pressable
                accessible
                style={styles.linkCont}
                accessibilityLabel={''}
                onPress={() => {
                  if (data.helpUrl) {
                    openURL(data.helpUrl);
                  }
                }}
                testID={'testID'}>
                <BaseText style={styles.link} text={'Open Help Page'} />
                <Image source={ICONS_SRC.OPEN_URL} style={styles.icon} />
              </Pressable>
            </View>
          ) : null}
        </View>
      </PageComponent>
    );
  }
};

const styles = StyleSheet.create({
  brandLabel: {
    fontWeight: '500',
    fontSize: text.t8,
    paddingVertical: spacing.s1,
  },
  image: {
    width: 325,
    height: 215,
    marginRight: 12,
    alignSelf: 'center',
  },
  icon: {
    width: 12,
    height: 12,
    marginLeft: 6,
    alignSelf: 'center',
    tintColor: textColor.link,
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  label: {paddingHorizontal: 20, paddingVertical: 16},
  link: {
    fontWeight: '500',
    fontSize: text.t8,
    paddingVertical: spacing.s1,
    color: textColor.link,
  },
  linkCont: {
    flexDirection: 'row',
  },
});
export default VehicleDetailScreen;
