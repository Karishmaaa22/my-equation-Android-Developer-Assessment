import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactDetailScreen({ route }) {
  const { contact } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, []);

  const checkFavorite = async () => {
    const stored = await AsyncStorage.getItem('favorites');
    const favorites = stored ? JSON.parse(stored) : [];
    const exists = favorites.find((item: any) => item.email === contact.email);
    setIsFavorite(!!exists);
  };

  const toggleFavorite = async () => {
    const stored = await AsyncStorage.getItem('favorites');
    let favorites = stored ? JSON.parse(stored) : [];

    if (isFavorite) {
      favorites = favorites.filter((item: any) => item.email !== contact.email);
    } else {
      favorites.push({
        ...contact,
        timestamp: new Date().toISOString()
      });
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
    Alert.alert(isFavorite ? 'Removed from favorites' : 'Marked as favorite');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: contact.picture.large }} style={styles.image} />
      <Text style={styles.name}>{contact.name.first} {contact.name.last}</Text>
      <Text>Email: {contact.email}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Button title={isFavorite ? 'Unmark Favorite' : 'Mark as Favorite'} onPress={toggleFavorite} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold' }
});
