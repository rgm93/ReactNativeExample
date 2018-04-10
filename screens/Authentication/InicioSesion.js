import React, { Component } from 'react';
import { Transitioner, Image, ActivityIndicator, TouchableOpacity, StyleSheet, Text, View, Navigator } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonCyan } from '../../components/ButtonCyan';
import { ButtonRed } from '../../components/ButtonRed';
import { ButtonBlue } from '../../components/ButtonBlue';
import { Container, Content, Header, Form, Item, Button, Label } from 'native-base';
import Register from '../../screens/Authentication/Register'
import Home from '../../screens/Navigation/Home'
//import * as firebase from 'firebase'
import { Scene, Router, Actions } from 'react-native-router-flux';
import { NavegadorPrincipal } from '../Navigation/Navegador';
import firebase from '../../components/Firebase';

const provider = new firebase.auth.FacebookAuthProvider();
const logged = true;

export default class InicioSesion extends Component {
     constructor(props) {
          super(props)
          this.state = ({
               email: '',
               password: '',
               firstLogged: false,
          })
     }

     componentDidMount() {
          var { navigate } = this.props.navigation;
          firebase.auth().onAuthStateChanged((user) => {
               if (user) {
                    if(user.emailVerified && this.state.firstLogged === false)
                    {
                         navigate('Principal');
                    } 
               }
               else {
                    return;
               }
          });
     }

     logIn = (email, password) => {
          var { navigate } = this.props.navigation;
          firebase.auth().signInWithEmailAndPassword(email, password)
               .then(() => {
                    if (!firebase.auth().currentUser.emailVerified) {
                         alert("Verifica tu email para poder iniciar sesión")
                         return;
                    }
                    else{
                         this.setState({
                              firstLogged: true,
                         });
                         navigate('Principal');
                    }
               })
               .catch(error => {
                    switch (error.code) {
                         case 'auth/email-already-in-use':
                              alert('Error: El usuario ya está registrado');
                              break;
                         case 'auth/wrong-password':
                              alert('La contraseña introducida es errónea');
                              break;
                         //case 'auth/'
                    }
               });
     }

     async googleAuth() {
          try {
               const result = await Expo.Google.logInAsync({
                    //androidClientId: YOUR_CLIENT_ID_HERE,
                    iosClientId: '757449178274-rt7hm8ksleuloojm2iliopq6ou0ujlnb.apps.googleusercontent.com',
                    scopes: ['profile', 'email'],
               });

               if (result.type === 'success') {
                    return result.accessToken;
               } else {
                    return { cancelled: true };
               }
          } catch (e) {
               return { error: true };
          }
     }

     async facebookAuth() {
          const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('408528422903101', {
               permissions: ['public_profile'],
          });
          if (type === 'success') {
               // Get the user's name using Facebook's Graph API
               const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}`);
               var credential = firebase.auth.FacebookAuthProvider.credential(token);
               firebase.auth().signInWithPopup(credential)
               //firebase.auth.signInWithProvider('facebook', response, '') 
               Alert.alert(
                    'Logged in!',
                    `Hi ${(await response.json()).name}!`,
               );
          }

          /*const provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
               var token = result.credential.accessToken;
               var user = result.user;
          })
               .then(result => console.log('${result.user.email} ha iniciado sesión'))
               .catch(error => console.log('Error: ${Error.code}: ${Error.message}'));
*/
     }

     renderCurrentState() {
          var { navigate } = this.props.navigation;
          return (
               <View style={styles.form}>
                    <Text style={styles.cabecera}>Bienvenido a</Text>
                    <Text style={styles.cabecera2}>GetOver</Text>
                    <Input
                         placeholder='Introduzca tu email...'
                         label='Correo Electrónico'
                         onChangeText={email => this.setState({ email })}
                         value={this.state.email}
                         autoCapitalize='none'
                    />
                    <Input
                         placeholder='Introduzca tu contraseña...'
                         label='Contraseña'
                         secureTextEntry
                         onChangeText={password => this.setState({ password })}
                         value={this.state.password}
                         autoCapitalize='none'
                    />
                    <ButtonCyan style={styles.button} onPress={() => this.logIn(this.state.email, this.state.password)}><Text style={styles.textButton}>Iniciar Sesión</Text></ButtonCyan>
                    <ButtonRed style={styles.buttonGoogle} onPress={() => this.googleAuth()}><Text style={styles.textGoogle}>Inicia sesión con Google</Text></ButtonRed>
                    <ButtonBlue style={styles.buttonFacebook} onPress={() => this.facebookAuth()}><Text style={styles.textFacebook}>Inicia sesión con Facebook</Text></ButtonBlue>
                    <Button style={styles.buttonNA} onPress={() => navigate('Register', {})}>
                         <Text style={styles.textNA}>¿No tienes cuenta? Regístrate</Text>
                    </Button>
               </View>
          )
     }
     render() {
          return (
               <View style={styles.containerMain}>
                    {/* <Image source={require('../../images/logo.png')}/> */}
                    <View style={styles.container}>

                         {this.renderCurrentState()}
                    </View>
               </View>

          );
     }

}

const styles = StyleSheet.create({
     logo: {
          flex: 1,
     },
     cabecera: {
          flex: 1,
          fontSize: 30,
          alignItems: 'center'
     },
     cabecera2: {
          flex: 1,
          fontSize: 30,
          alignItems: 'center',
          marginBottom: 80
     },
     containerMain: {
          flex: 1,
          backgroundColor: 'white',
     },
     container: {
          flex: 1,
          padding: 50,
          marginTop: 10,
          alignItems: 'center',
          flexDirection: 'row',
     },
     buttonNA: {
          padding: 20,
          marginTop: 40,
          marginLeft: 25,
          width: '100%',
          height: 30,
          backgroundColor: 'transparent',
          borderRadius: 4,
     },
     textNA: {
          flex: 1,
          width: 100,
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: 13
     },
     form: {
          flex: 1
     }
});