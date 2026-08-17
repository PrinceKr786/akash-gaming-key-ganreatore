// firebase-config.js (For both Admin & User Panel)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg9TG0NlhtywuE8nnO3-4KxtFIENN9Dwg",
  authDomain: "batter-cool.firebaseapp.com",
  databaseURL: "https://batter-cool-default-rtdb.firebaseio.com",
  projectId: "batter-cool",
  storageBucket: "batter-cool.firebasestorage.app",
  messagingSenderId: "386024765223",
  appId: "1:386024765223:web:b9f981869c1bb043585b02",
  measurementId: "G-NBBVEGVPJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
