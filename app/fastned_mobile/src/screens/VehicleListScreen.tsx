// import {
//   type RouteProp,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import {type StackNavigationProp} from '@react-navigation/stack';
// import {testId} from '../common/testIds';
import {spacing} from '../common/spacing';
import {text} from '../common/typography';
import {PageComponent} from '../components/PageComponent';

import {backgrounds, primary} from '../common/colors';
// import fonts from 'assets/fonts';
// import {Button} from 'components/Button/Button';
// import {Card} from 'components/Card/Card';
// import Icons from 'constants/Icons';
// import {container} from 'constants/Layout';
// import {ScreenName} from 'navigation/ScreenName';
// import {type LoginStackParamList} from 'navigation/stacks/LoginStack';
// import React, {type FC, Fragment} from 'react';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import Image from 'react-native-remote-svg';
import React, {type FC, Fragment} from 'react';
import { StyleProp, StyleSheet, useColorScheme, View, ViewStyle } from 'react-native';
import BaseText from '../components/primitives/BaseText';

// export interface React.ComponentClass<P,S> extends StaticLifecycle

type MyProps = {
  // using `interface` is also ok
  // message: string;
};
type MyState = {
  // count: number; // like this
};
class VehicleListScreen extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  componentDidMount(): void {

  }

  render(): React.JSX.Element {
    console.log('asasasas');
    return (
      <PageComponent useSafeAreaView>
        <BaseText text={'123'} />
      </PageComponent>
    );
  }
}
export default VehicleListScreen;

//import type {PropsWithChildren} from 'react';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// <ScrollView
//   contentContainerStyle={styles.contentContainer}
//   bounces={false}>
//   <View style={styles.TopHeader}>
//     <Image style={styles.welcomeLogo} source={Icons.appLogo} />
//
//     <Text style={styles.tagLine}>Making minds happier</Text>
//   </View>
// </ScrollView>

//FlatList
// data={deviceList}
// numColumns={2}
// ListEmptyComponent={
//   <View style={styles.view}>
//     <Text>No devices found</Text>
//   </View>
// }
// renderItem={({ item, index }) => (
//     <Item position={index + 1} device={item} navigation={navigation}
//           indexedItems={deviceState == 'CONNECTED' ? "Indexing progress : " + indexedItems +"%" : null}
//           indexerState={deviceState == 'CONNECTED'  ? indexerState : null}
//     />
// )
// }
// keyExtractor={(item, index) => `${item.name}${item.pseudoSerial}`}
//>

// const LoginScreen: FC = () => {
//   const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>();
//   const route = useRoute<RouteProp<LoginStackParamList, ScreenName.Login>>();
//   const {error} = route.params || '';
//
//   const navigateToSignUp = (): void => {
//     navigation.navigate(ScreenName.SignUp);
//   };
//
//   const navigateToLogin = (): void => {
//     navigation.navigate(ScreenName.SignIn);
//   };
//
//   return (
//     <PageComponent useSafeAreaView>
//       <ScrollView
//         contentContainerStyle={styles.contentContainer}
//         bounces={false}>
//         <View style={styles.TopHeader}>
//           <Image style={styles.welcomeLogo} source={Icons.appLogo} />
//
//           <Text style={styles.tagLine}>Making minds happier</Text>
//
//           <View>
//             {error === 'incorrectCourse' ? (
//               <Fragment>
//                 <Image
//                   style={styles.staff}
//                   source={require('../../assets/images/landing/staff.png')}
//                 />
//
//                 <Card style={styles.card}>
//                   <Text style={styles.text}>
//                     Sorry but the uprise mobile app is currently undergoing
//                     system upgrades, please visit http://app.uprise.co in your
//                     browser to access the web app.
//                   </Text>
//
//                   <Text style={styles.text}>🚀</Text>
//                 </Card>
//               </Fragment>
//             ) : (
//               <Image
//                 style={styles.staff}
//                 source={require('../../assets/images/landing/staff.png')}
//               />
//             )}
//           </View>
//         </View>
//
//         <View style={styles.getStartedContainer}>
//           <Text style={styles.btnText}>New User?</Text>
//
//           <Button
//             testID={testId.LOGIN_SIGN_UP_BUTTON}
//             onPress={navigateToSignUp}
//             style={styles.signUp}
//             variant="primary"
//             size="full-width"
//             title="Sign up"
//             a11yLabel="Sign up"
//           />
//
//           <Text style={styles.btnText}>Already have an account?</Text>
//
//           <Button
//             testID={testId.LOGIN_SIGN_IN_BUTTON}
//             onPress={navigateToLogin}
//             variant="secondary"
//             size="full-width"
//             title="Sign in"
//             a11yLabel="Sign in"
//           />
//         </View>
//       </ScrollView>
//     </PageComponent>
//   );
// };
// const styles = StyleSheet.create({
//   contentContainer: {
//     // ...container,
//     padding: 0,
//     backgroundColor: backgrounds.white,
//     justifyContent: 'space-between',
//   },
//   TopHeader: {
//     marginTop: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     padding: spacing.s5,
//     borderRadius: 10,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignContent: 'center',
//     marginBottom: spacing.s5,
//   },
//
//   welcomeLogo: {
//     width: 165,
//     height: 24,
//     marginBottom: 12,
//     marginRight: 0,
//   },
//   signUp: {
//     marginBottom: spacing.s4,
//   },
//   signIn: {
//     marginBottom: 0,
//   },
//   btnText: {
//     marginBottom: 5,
//     fontFamily: fonts.regular,
//     color: primary.purple,
//     fontSize: text.t5,
//   },
//   getStartedContainer: {
//     width: '100%',
//     justifyContent: 'flex-end',
//     padding: spacing.s6,
//     paddingBottom: 0,
//     paddingTop: 0,
//     marginTop: 45,
//     marginBottom: 24,
//   },
//   helpNow: {marginBottom: spacing.s10},
//   HelpNowWrap: {},
//   imageBackground: {
//     width: '100%',
//     height: 400,
//   },
//   staff: {
//     // width: 256,
//     // height: 327,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   text: {textAlign: 'center'},
// });
