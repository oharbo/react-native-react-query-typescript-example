import React, {FC, memo} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {Theme, useTheme} from '@react-navigation/native';

import {text as fontSize} from '../../common/typography';
interface BaseTextProps extends TextProps {
  isBold?: boolean;
  text?: [] | string;
  truncate?: boolean;
}

const BaseText: FC<BaseTextProps> = ({
  allowFontScaling = false,
  ellipsizeMode = 'tail',
  isBold,
  numberOfLines,
  onPress,
  style = [],
  testID,
  text = '',
  truncate = false,
}: BaseTextProps) => {
  const {colors}: Theme = useTheme();

  const fWeight: '500' | '400' = isBold ? '500' : '400';
  const styles: StyleProp<TextStyle> = [
    {color: colors?.text, fontSize: fontSize.t7, fontWeight: fWeight},
    style,
  ];
  return (
    <Text
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines || (truncate ? 1 : 0)}
      onPress={onPress}
      style={styles}
      suppressHighlighting
      testID={testID}
      textBreakStrategy={'simple'}>
      {text}
    </Text>
  );
};
export default memo(BaseText);
