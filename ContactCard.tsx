import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContactCard({ contact, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: contact.picture.thumbnail }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{contact.name.first} {contact.name.last}</Text>
        <Text>{contact.email}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },
  name: {
    fontWeight: 'bold'
  }
});
