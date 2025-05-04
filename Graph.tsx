import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

type GraphProps = {
  labels: string[];
  data: number[];
  title?: string;
};

export default function Graph({ labels, data, title = 'Favorites Stats' }: GraphProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <BarChart 
          data={{
          labels,
          datasets: [{ data }],
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
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
});
