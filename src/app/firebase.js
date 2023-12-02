import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBLpBBcc_RZZEsYXs02Twdvlbai2Pu-cBQ',
  authDomain: 'fe-testtask.firebaseapp.com',
  projectId: 'fe-testtask',
  storageBucket: 'fe-testtask.appspot.com',
  messagingSenderId: '630866905887',
  appId: '1:630866905887:web:e6f9a39e2971e8acacbe2a'
};

const app = initializeApp(firebaseConfig);

export { app };
