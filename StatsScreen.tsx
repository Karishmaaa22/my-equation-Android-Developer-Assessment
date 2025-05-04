import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { getFavoritesStatsLast6Hours } from '../utils/timestampTracker';

export default function StatsScreen() {
  const [labels, setLabels] = useState<string[]>([]);
  const [stats, setStats] = useState<number[]>([]);

  useEffect(() => {
    const loadStats = async () => {
      const { labels, data } = await getFavoritesStatsLast6Hours();
      setLabels(labels);
      setStats(data);
    };

    loadStats();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites Per Hour (Last 6 Hours)</Text>
      <BarChart
        data={{
          labels,
          datasets: [{ data: stats }],
        }}
        width={Dimensions.get('window').width - 30}
        height={220}
        fromZero
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.6,
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
});
