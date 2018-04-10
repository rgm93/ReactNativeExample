import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, StyleSheet, Text, View, Image, Navigator } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonCyan } from '../../components/ButtonCyan';
import { ButtonRed } from '../../components/ButtonRed';
import { ButtonBlue } from '../../components/ButtonBlue';
import { Container, Content, Header, Form, Item, Button, Label } from 'native-base';
import { StackNavigator } from 'react-navigation';
import InicioSesion from '../Authentication/InicioSesion'
import ProfileDetails from '../Settings/ProfileDetails'
import Screens from '../../screens/Navigation/Navegador'
import firebase from '../../components/Firebase';

export default class Profile extends Component {

     constructor(props) {
          super(props)
          this.state = ({
               email: '',
               password: '',
               //authenticated: true,
          })
     }

     modifyProfile() {
          var { navigate } = this.props.navigation;
          navigate('ProfileDetails')
     }

     closeSession() {
          try {
               var { navigate } = this.props.navigation;
               firebase.auth().signOut();
               navigate('InicioSesion')
               /*this.setState({
                    response: 'Usuario deslogeado',
                    authenticated: false
               })*/
               
          } catch (error) {
               console.log('Error: Usuario no registrado');
          }
     }
     render() {
          var { navigate } = this.props.navigation;
          //if (this.state.authenticated) {
               return (
                    <View style={styles.containerMain}>
                         <View style={styles.containerPerfil}>
                              <Image source={require("../../images/camera.png")} style={styles.foto} />

                              <View style={styles.perfil}>
                                   <Text style={styles.usrnm}> Username </Text>
                                   <Text style={styles.desc}> Description </Text>
                              </View>
                         </View>
                         {/*<View style={styles.containerMedia}>
                    </View>*/}
                         <View style={styles.containerFoot}>
                              <ButtonCyan onPress={() => this.modifyProfile()}>
                                   <Text>Modificar Perfil</Text>
                              </ButtonCyan>
                         </View>
                         <View style={styles.containerFoot}>
                              <ButtonRed onPress={() => this.closeSession()}>
                                   <Text>Cerrar Sesión</Text>
                              </ButtonRed>
                         </View>
                    </View>
               )

          }
          
           //return <Screens />
          
     
}

const styles = StyleSheet.create({
     containerMain: {
          //flex: 1,
          padding: 0,
          width: '100%',
          height: '100%',
          //alignItems: 'center',
          //flexDirection: 'row',
          backgroundColor: 'white'
     },
     containerFoot: {
          //flex: 1,
          padding: 15,
          backgroundColor: 'white',

     },
     containerPerfil: {
          padding: 0,
          width: '99%',
          height: 250,
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 2,
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
          backgroundColor: 'white'
     },
     containerMedia: {
          padding: 0,
          width: '99%',
          height: 270,
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 2,
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
          backgroundColor: 'white'
     },
     perfil: {
          flex: 1,
          width: 300,
          height: 500,
          marginTop: 20,
          backgroundColor: 'white',
     },
     foto: {
          width: 100,
          height: 100,
          borderColor: 'black',
          marginTop: 20,
          borderRadius: 200 / 4,
          borderWidth: 2,
     },
     usrnm: {
          fontSize: 30,
          paddingLeft: 5
     },
     desc: {
          fontSize: 15,
          paddingLeft: 5,
          marginTop: 10,
     }
});