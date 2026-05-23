// ── ARDZ Construction — Shared Firebase Config ───────────────
// Place this file at: references/firebase-config.js
// Import in any project file using: import { firebaseConfig } from '../references/firebase-config.js';

const _apiKey = sessionStorage.getItem('st_api_key');
if (!_apiKey) {
  window.location.href = '../index.html';
}

export const firebaseConfig = {
  apiKey: _apiKey,
  authDomain: "equiptrack-e1011.firebaseapp.com",
  projectId: "equiptrack-e1011",
  storageBucket: "equiptrack-e1011.firebasestorage.app",
  messagingSenderId: "468749948486",
  appId: "1:468749948486:web:8bbcd38e0435e92d86dc47"
};
