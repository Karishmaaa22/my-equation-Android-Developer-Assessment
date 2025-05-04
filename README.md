# 📱 Contacts Dashboard App

A React Native application that displays a list of contacts fetched from the Random User API. Users can view detailed contact information, mark contacts as favorites, view their favorite contacts, and see a bar chart of favoriting activity in the last 6 hours.

---

## 🚀 Features

- 🔄 Fetches 10 random users from [Random User API](https://randomuser.me/api/?results=10)
- 📇 Contacts List with profile picture, name, and email
- 📋 Contact Detail screen with full profile and "Mark as Favorite"
- ⭐ Favorites screen (persisted via AsyncStorage)
- 📊 Stats screen with a bar chart showing favoriting activity by hour
- 📁 Export favorites to a JSON file (Bonus)
- 🌗 Light/Dark Mode compatible (optional)
- 🔍 Search Contacts by name (optional)

---

## 🧱 Tech Stack

- React Native + TypeScript
- Expo
- React Navigation (Bottom Tabs)
- AsyncStorage for persistent storage
- `react-native-chart-kit` for charting
- `expo-file-system` for file export (bonus)

---

## 📂 Folder Structure

```
/contacts-dashboard-app
│
├── /components
│   ├── ContactCard.tsx
│   └── Graph.tsx
│
├── /screens
│   ├── ContactsListScreen.tsx
│   ├── ContactDetailScreen.tsx
│   ├── FavoritesScreen.tsx
│   └── StatsScreen.tsx
│
├── /utils
│   ├── storage.ts
│   └── timestampTracker.ts
│
├── App.tsx
├── package.json
└── tsconfig.json
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Karishmaaa22/my-equation-Android-Developer-Assessment.git
cd contacts-dashboard-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the Expo server**

```bash
npx expo start
```

Scan the QR code using the Expo Go app on your Android/iOS device.

---

## 📱 Usage

- Navigate through the app using the bottom tab navigator.
- Tap a contact to see details and mark them as a favorite.
- View all your favorites under the Favorites tab.
- Check the Stats tab to see how many favorites you added in the last 6 hours.
- Optionally export favorites to a `.json` file from the Favorites screen.

---

## 📤 Bonus Features (Optional)

- [ ] Search bar to filter contacts by name.
- [ ] Light/Dark mode support.
- [ ] Export favorite contacts to a JSON file.

---

## 🧪 Testing

Tested using:

- **Android Emulator**
- **Expo Go App** (Android & iOS)

---

## 🛠️ Dependencies

```json
"@react-native-async-storage/async-storage"
"@react-navigation/native"
"@react-navigation/bottom-tabs"
"react-native-chart-kit"
"react-native-svg"
"expo"
"expo-file-system"
"react-native"
"typescript"
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by Karishma Patil — BCA Student | React Native Developer
