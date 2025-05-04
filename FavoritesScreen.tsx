import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import ContactCard from '../components/ContactCard';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    const stored = await AsyncStorage.getItem('favorites');
    setFavorites(stored ? JSON.parse(stored) : []);
  };

  const exportFavorites = async () => {
    const fileUri = FileSystem.documentDirectory + 'favorites.json';
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(favorites));
    Alert.alert('Exported!', `File saved to: ${fileUri}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Export Favorites" onPress={exportFavorites} />
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <ContactCard
            contact={item}
            onPress={() => navigation.navigate('ContactDetail', { contact: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 }
});
