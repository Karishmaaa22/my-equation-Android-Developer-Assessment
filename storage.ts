import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

/**
 * Fetch all favorite contacts from AsyncStorage.
 */
export const getFavorites = async () => {
  try {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error('Error reading favorites:', error);
    return [];
  }
};

/**
 * Save updated list of favorite contacts to AsyncStorage.
 */
export const saveFavorites = async (favorites: any[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

/**
 * Add a contact to favorites and timestamp it.
 */
export const addFavorite = async (contact: any) => {
  const favorites = await getFavorites();
  const updated = [...favorites, { ...contact, timestamp: new Date().toISOString() }];
  await saveFavorites(updated);
};

/**
 * Remove a contact from favorites by email.
 */
export const removeFavorite = async (email: string) => {
  const favorites = await getFavorites();
  const updated = favorites.filter((item: any) => item.email !== email);
  await saveFavorites(updated);
};

/**
 * Check if a contact is already favorited.
 */
export const isFavorite = async (email: string): Promise<boolean> => {
  const favorites = await getFavorites();
  return favorites.some((item: any) => item.email === email);
};
