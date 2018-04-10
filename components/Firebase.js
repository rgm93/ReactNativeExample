import React, { Component } from 'react'
import * as firebase from 'firebase'

const firebaseConfig = {
     apiKey: "AIzaSyDgMraMIq12a4ubWow1ZQ5h40eHAaF6PCk",
     authDomain: "getover-e413d.firebaseapp.com",
     databaseURL: "https://getover-e413d.firebaseio.com",
     projectId: "getover-e413d",
     storageBucket: "getover-e413d.appspot.com",
     messagingSenderId: "1054536800137"
};

if(!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
}

export default firebase;
