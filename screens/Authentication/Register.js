import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Platform, TouchableHighlight, Image, Alert } from 'react-native';
import { Input } from '../../components/Input';
import { ButtonCyan } from '../../components/ButtonCyan';
import { ButtonRed } from '../../components/ButtonRed';
import { ButtonBlue } from '../../components/ButtonBlue';
import { Container, Content, Header, Form, Item, Button, Label } from 'native-base';
import { ImagePicker } from 'react-native-image-picker';
import firebase from '../../components/Firebase';

//import { RNFetchBlob } from 'react-native-fetch-blob';

/* Variables necesarias para poder almacenar en Firebase una imagen */
/*const Blob = RNFetchBlob.polyfill.Blob;
const fs = FetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === "ios" ? uri.replace('file://', '') : uri
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('image'.child(imageName));
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, {type: `${mine}; BASE64`});
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, {contentType: mime});
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      })
  })
}*/

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: '',
      response: '',
      imagePath: '',
      imageHeight: '',
      imageWidth: '',
    }
    //this.signUp = this.signUp.bind(this);
  }

  signUp = (email, password) => {
    var { navigate } = this.props.navigation;
   
      if (this.state.password.length < 6) {
        Alert.alert("Error", "La contraseña debe tener al menos 6 dígitos");
        return;
      }
      else {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification();
          firebase.auth().signOut();
          navigate('InicioSesion')
          alert("Verifica tu email para poder iniciar sesión");
        })
        .catch(error => {
          switch(error.code) {
              case 'auth/email-already-in-use':
                alert('Error: El usuario ya está registrado');
                 break;
          }
        });
      }
  }

  openImagePicker() {
    const options = {
      title: 'Seleccionar imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker((options, response) => {
      if (response.didCancel) {
        console.log('El usuario ha cancelado la operacion de imagen');
      } else if (response.error) {
        console.log('Error' + response.error);
      } else if (response.customButtom) {
        console.log('El usuario le ha dado a customizado' + response.customButtom);
      } else {
        this.setState({
          imagePath: response.uri,
          imageHeight: response.height,
          imageWidth: response.width
        })
      }
    })
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.cabecera}>¡Regístrate y se</Text>
            <Text style={styles.cabecera2}>un GetOver!</Text>
            {this.state.imagePath ? <Image source={{ uri: this.state.imagePath }} /> : null}
            <TouchableHighlight style={styles.imagen} onPress={this.openImagePicker}>
              <Image style={styles.imagen2} source={require('../../images/camera.png')} />
            </TouchableHighlight>
            <Input
              placeholder='Escribe un nombre'
              label='Nombre de usuario'
              onChangeText={userName => this.setState({ userName })}
              value={this.state.userName}
              autoCapitalize='none'
            />
            <Input
              placeholder='Escribe tu email'
              label='Correo Electrónico'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              autoCapitalize='none'
            />
            <Input
              placeholder='Escribe una contraseña'
              label='Contraseña'
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              autoCapitalize='none'
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