export type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

export interface VehicleItem {
  id: number;
  brand: string;
  model: string;
  version: string;
  category: string;
  imageUrl: string;
}

interface Notes {
  id: number;
  vehicleTypeId: number;
  title: string;
  description: string;
}

export interface VehicleDetails extends VehicleItem {
  connectorType: string;
  recommendedCharger: string;
  chargeSpeedInKw: number;
  helpUrl: string;
  autochargeCapable: boolean;
  notes: [Notes];
  externalParameters: {
    typecode: string;
    ref_consumption: number;
    usable_battery_wh: number;
    fast_chargers: string;
  };
  chargeCurve: string;
}
