import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  flx1: {flex: 1},
});

interface PageComponentInterface extends NativeSafeAreaViewProps {
  safeAreaStyles?: StyleProp<ViewStyle>;
  useSafeAreaView?: boolean;
  useModalBackground?: boolean;
}

export const PageComponent: FC<PageComponentInterface> = ({
  children,
  edges = ['top', 'bottom', 'left', 'right'],
  safeAreaStyles = [],
  style = [],
  useSafeAreaView,
}) => {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  const {colors} = useTheme();
  console.log('PageComponent isDarkMode', isDarkMode);
  console.log('PageComponent colors:', colors);

  const bg: {backgroundColor: string} = {backgroundColor: colors?.card};

  if (useSafeAreaView) {
    return (
      <SafeAreaView
        style={[styles.flx1, bg, safeAreaStyles]}
        edges={edges}
        testID="page-component-view">
        <View style={[styles.flx1, style]}>{children}</View>
      </SafeAreaView>
    );
  }

  return <View style={[styles.flx1, style]}>{children}</View>;
};
