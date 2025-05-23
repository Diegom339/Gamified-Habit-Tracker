# 🎯 Gamified Habit Tracker

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-%2300C7B7?style=flat&logo=vercel&logoColor=white)](https://gamified-habit-tracker-git-main-diegom339s-projects.vercel.app)

Track your habits with XP, streaks, emoji avatars, dark mode, login/logout, export/import — and a splash of confetti!  
Built with React, Firebase Auth, and Bootstrap.

---

## 📸 Preview

### Habit Dashboard  
![Habit Page](./src/screenshots/habitpage.jpeg)

### Dark Mode Login  
![Login Page](./src/screenshots/loginpage.jpeg)

---

## ✨ Features

- ✅ **User Authentication** (Email/Password with Firebase)
- 🎯 **XP System** – Gain 10 XP per completion
- 🔥 **Streak Tracker** – Auto-resets daily
- 🧠 **Habit History View** – 7-day check-in calendar
- 💾 **Export/Import Habits** – Save/load as JSON
- 🎉 **Confetti On Completion**
- 🌙 **Dark Mode Toggle** – Auto-saved in localStorage
- 🧩 **Emoji Habit Icons**
- 🪄 Smooth transitions and responsive layout

---

## 🛠 Tech Stack

- **Frontend**: React, Bootstrap 5, Chart.js (optional XP level)
- **Auth**: Firebase Authentication
- **State**: React Hooks, LocalStorage
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Live Demo

👉 [https://gamified-habit-tracker-git-main-diegom339s-projects.vercel.app](https://gamified-habit-tracker-git-main-diegom339s-projects.vercel.app)

---

## 🧪 Local Setup
🔐 Firebase Auth Setup
Create a Firebase project

Enable Email/Password Authentication

Replace your Firebase config in src/firebase.js

📤 Export/Import Habits
Export: Downloads a .json file with your current habits

Import: Replaces your habits with a previously saved file

🙌 Author
Built by Diego Martinez

```bash
git clone https://github.com/Diegom339/Gamified-Habit-Tracker.git
cd Gamified-Habit-Tracker
npm install
npm start
