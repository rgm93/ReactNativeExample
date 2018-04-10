import React from "react";
import { StackNavigator,TabNavigator, DrawerNavigator } from "react-navigation";

import Home from '../screens/Navigation/Home';
import Profile from '../screens/Navigation/Profile';
import NavegadorPrincipal from '../screens/Navigation/Navegador'

export const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e58f19',
    activeBackgroundColor: "#a9c3d2",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});

export const CerrarSesion = StackNavigator({
     NavegadorPrincipal: {
          screen: NavegadorPrincipal,
          navigationOptions: {
               title: "Inicio de Sesión"
          }
     }
})

