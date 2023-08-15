import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD25BZcyp9Gztr-0CIqmHotyBR1Z0s_KjM',
  authDomain: 'toystore-86001.firebaseapp.com',
  projectId: 'toystore-86001',
  storageBucket: 'toystore-86001.appspot.com',
  messagingSenderId: '961924735847',
  appId: '1:961924735847:web:b7974ffcb86fb2272ac5c2',
};

export function initFireBase() {
  initializeApp(firebaseConfig);
}
