import firebase from 'firebase' 
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "receipt-application-2020",
    "appId": "1:1079763171189:web:6773b8233a3909cb6b453c",
    "storageBucket": "receipt-application-2020.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAnTw-_DdobKypcg18ZJF-rQPRQMKeeG6k",
    "authDomain": "receipt-application-2020.firebaseapp.com",
    "messagingSenderId": "1079763171189"
  });