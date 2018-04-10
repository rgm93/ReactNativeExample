import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Screens from './screens/Navigation/Navegador'

export default class App extends Component {
   render() {
       return <Screens />
   }
}





/*const Navigation = StackNavigator({
   
});*/

/*const ProfileTab = StackNavigator({
   Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
         headerLeft: 'Perfil'
      }),
   },
   ProfileDetails: {
      screen: ProfileDetails,
   },
   navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      //title: `${navigation.state.params.user}'s Profile`,
      headerLeft: 'Perfil',
      title: 'Detalles',
   }),
}, {
      headerMode: 'screen',
   });

//export default Navigation;

var NavegadorPrincipal = TabNavigator({
   Login: {
      screen: Login,
      tabBarOptions: {
         
      }
   },
   Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
         title: 'Registrarse',
      }),
   },
   Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
         title: 'Home',
         tabBarLabel: 'Home',
         tabBarIcon: ({ tintColor }) => (
            <Image source={require("./images/camera.png")}
               style={{ width: 22, height: 22, marginTop: 5 }} />
         )
      })
   },
   Profile: {
      screen: ProfileTab,
      navigationOptions: ({ navigation }) => ({
         // Customize header's title with user name passed to navigate()
         // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
         //title: `${navigation.state.params.user}'s Profile`,
         title: 'Perfil',
         tabBarLabel: 'Perfil',
         tabBarIcon: ({ tintColor }) => (
            <Image source={require("./images/camera.png")}
               style={{ width: 22, height: 22 }} />
         )
      }),

   },
}, {
      headerMode: 'screen',
      swipeEnabled: true,
      tabBarOptions: {
         activeTintColor: 'black',
         activeBackgroundColor: '#F7F7F7',
         inactiveTintColor: 'black',
         inactiveBackgroundColor: '#F7F7F7',

         labelStyle: {
            fontSize: 10
         }
      }
   });

export default NavegadorPrincipal;*/

/*export default StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});*/