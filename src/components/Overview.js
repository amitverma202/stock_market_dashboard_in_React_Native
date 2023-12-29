import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <Text style={styles.symbolText}>{symbol}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.priceText}>
          ${price}
          <Text style={styles.currencyText}>{currency}</Text>
        </Text>
        <Text
          style={[
            styles.changeText,
            { color: change > 0 ? '#32CD32' : '#FF0000' },
          ]}
        >
          {change} ({changePercent}%)
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  symbolText: {
    fontSize: 16,
    color: '#A9A9A9',
    position: 'absolute',
    left: 12,
    top: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  currencyText: {
    fontSize: 16,
    color: '#A9A9A9',
    marginLeft: 2,
  },
  changeText: {
    fontSize: 16,
  },
});

export default Overview;
