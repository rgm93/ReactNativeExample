import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text, View, Image, Navigator } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonCyan } from '../../components/ButtonCyan';
import { ButtonRed } from '../../components/ButtonRed';
import { ButtonBlue } from '../../components/ButtonBlue';
import { Container, Content, Header, Form, Item, Button, Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
     /*static navigationOptions = {
          title: 'Home',
          headerLeft: null,
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => (
               <Image source={require("../../images/camera.png")}
               style={{width: 22, height: 22, marginTop: 5}}/>
          )
     }*/
     render()
     {
          return(
               <View style={styles.containerMain}>
                    <Text>hola</Text>
               </View>
          )
     }
}

const styles = StyleSheet.create({
     containerMain: {
          flex: 1,
          backgroundColor: 'white'
     }
})