import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../context/ThemeContext';
import Overview from './Overview';
import Details from './Details';
import Chart from './Chart';
import Header from './Header';
import StockContext from '../context/StockContext';
import { fetchStockDetails, fetchQuote } from '../utils/api/stock-api';
import { FontAwesome } from '@expo/vector-icons';

const Dashboard = ({ onLogout }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log('-----------', error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  const handleLogout = () => {
    onLogout();
    navigation.navigate('/');
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? '#282c34' : '#f8f9fa',
          color: darkMode ? '#ffffff' : '#000000',
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <Header name={stockDetails.companyName} />
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutButton}
          >
            <FontAwesome
              name="sign-out"
              size={24}
              color={darkMode ? '#ffffff' : '#000000'}
            />
            <Text
              style={[
                styles.logoutText,
                { color: darkMode ? '#ffffff' : '#000000' },
              ]}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.overviewContainer}>
        <Overview
          symbol={stockSymbol}
          price={quote.iexClose}
          change={quote.iexOpen}
          changePercent={quote.iexMarketPercent}
          currency={stockDetails.currency}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Details details={quote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  logoutText: {
    marginLeft: 5,
    fontSize: 16,
  },
  chartContainer: {
    flex: 4,
    marginBottom: 10,
  },
  overviewContainer: {
    flex: 2,
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 3,
  },
});

export default Dashboard;
