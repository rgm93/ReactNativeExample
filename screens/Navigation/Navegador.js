import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Navigator, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Home from '../../screens/Navigation/Home'
import Profile from '../../screens/Navigation/Profile'
import ProfileDetails from '../Settings/ProfileDetails'
import Register from '../Authentication/Register'
import InicioSesion from '../Authentication/InicioSesion'
import Navigation from '../../App'

export default Screens = StackNavigator({
      InicioSesion: {
            screen: InicioSesion,
            navigationOptions: {
                  title: 'Iniciar Sesión',
                  headerLeft: null,
                  swipeEnabled: false,
            }
      },
      Register: {
            screen: Register,
            navigationOptions: {
                  title: 'Registrarse',
                  swipeEnabled: false,
            }
      },
      Principal: {
            screen: TabNavigator({
                  Home: {
                        screen: Home,
                        navigationOptions: ({ navigation }) => ({
                              title: 'Home',
                        }),
                  },
                  Profile: {
                        screen: Profile,
                        navigationOptions: ({ navigation }) => ({
                              title: 'Perfil',
                              swipeEnabled: false,
                        }),
                  },
            }),
            navigationOptions: ({ navigation }) => ({
                  headerLeft: null,
                  swipeEnabled: false,
                  tabBarOptions: {
                        activeTintColor: 'black',
                        activeBackgroundColor: '#F7F7F7',
                        inactiveTintColor: 'black',
                        inactiveBackgroundColor: '#F7F7F7',

                        labelStyle: {
                              fontSize: 10
                        }
                  }
            })
      },
      ProfileDetails: {
            screen: ProfileDetails,
            title: 'Detalles'
      },

})