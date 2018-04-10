import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Platform, TouchableHighlight, Image, Alert } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonCyan } from '../../components/ButtonCyan';
import { ButtonRed } from '../../components/ButtonRed';
import { ButtonBlue } from '../../components/ButtonBlue';
import { Container, Content, Header, Form, Item, Button, Label } from 'native-base';
import { ImagePicker } from 'react-native-image-picker';
import firebase from '../../components/Firebase';

export default class ProfileDetails extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               email: '',
               password: '',
               userName: '',
          }
     }

     changeDetails(){
          firebase.database.ref(`Users/${user.uid}`).set({
               name: this.state.name,
               email: this.state.email,
               });
     }
     render() {
          return (
               <View style={styles.containerMain}>
                    <View style={styles.container}>
                         <View style={styles.form}>
                              <Text style={styles.cabecera}>Modifica a tu gusto</Text>
                              <Text style={styles.cabecera2}>tu perfil</Text>
                              {this.state.imagePath ? <Image source={{ uri: this.state.imagePath }} /> : null}
                              <TouchableHighlight style={styles.imagen} onPress={this.openImagePicker}>
                                   <Image style={styles.imagen2} source={require('../../images/camera.png')} />
                              </TouchableHighlight>
                              <Input
                                   placeholder='Escribe un nombre'
                                   label='Nombre de usuario'
                                   onChangeText={userName => this.setState({ userName })}
                                   value={this.state.userName}
                              />
                              <Input
                                   placeholder='Escribe tu email'
                                   label='Correo Electrónico'
                                   onChangeText={email => this.setState({ email })}
                                   value={this.state.email}
                              />
                              <Input
                                   placeholder='Escribe una contraseña'
                                   label='Contraseña'
                                   secureTextEntry
                                   onChangeText={password => this.setState({ password })}
                                   value={this.state.password}
                              />
                              <ButtonCyan style={styles.button} onPress={() => this.signUp(this.state.email, this.state.password)}><Text style={styles.textButton}>Registrarse</Text></ButtonCyan>

                         </View>
                    </View>
               </View>
          );
     }
}

const styles = StyleSheet.create({
     containerMain: {
          flex: 1,
          backgroundColor: 'white'
     },
     container: {
          flex: 1,
          padding: 50,
          marginBottom: 10,
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white'
     },
     cabecera: {
          flex: 1,
          fontSize: 30,
          marginTop: 10,
          alignItems: 'center'
     },
     cabecera2: {
          flex: 1,
          fontSize: 30,
          marginBottom: 50,
          alignItems: 'center',
     },
     imagen: {
          width: 100,
          height: 100,
          marginLeft: 90,
          marginBottom: 30,
          borderWidth: 1,
          borderColor: 'grey',
     },
     imagen2: {
          width: 90,
          height: 90,
          marginLeft: 4,
          marginTop: 3
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
          flex: 1,
          marginBottom: 60
     }
});