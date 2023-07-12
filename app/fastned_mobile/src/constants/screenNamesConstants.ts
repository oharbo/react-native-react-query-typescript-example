import {VehicleItem} from '../shared/lib/types';

interface ScreenNamesInt {
  [index: string]: string;
}

export enum ScreenNames {
  vehicleListScreen = 'vehicleListScreen',
  vehicleDetailScreen = 'vehicleDetailScreen',
}

export const ScreenTitleName: ScreenNamesInt = {
  vehicleListScreen: 'Fleet',
  vehicleDetailScreen: 'Vehicle Details',
};

export type RootStackParamList = {
  [ScreenNames.vehicleListScreen]: undefined;
  [ScreenNames.vehicleDetailScreen]: {
    item: VehicleItem;
  };
};
