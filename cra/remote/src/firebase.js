import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDie_GMV72E3pWh3M1ZsO6ochuhd_Pemlg',
  authDomain: 'frontend-c9cf8.firebaseapp.com',
  projectId: 'frontend-c9cf8',
  storageBucket: 'frontend-c9cf8.appspot.com',
  messagingSenderId: '455654059674',
  appId: '1:455654059674:web:816a02513197544909b923',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
