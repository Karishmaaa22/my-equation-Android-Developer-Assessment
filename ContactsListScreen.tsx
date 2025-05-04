import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import ContactCard from '../components/ContactCard';

export default function ContactsListScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({ item }) => (
            <ContactCard
              contact={item}
              onPress={() => navigation.navigate('ContactDetail', { contact: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 }
});
