import firebase from 'firebase';
import constants from './constants';

const config = {
    apiKey: constants.apiKey,
    authDomain: constants.authDomain,
    databaseURL: constants.databaseURL,
    storageBucket: constants.storageBucket
};

const fire = firebase.initializeApp(config);

export default fire;
