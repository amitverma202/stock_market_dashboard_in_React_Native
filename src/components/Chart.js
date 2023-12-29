import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, YAxis, XAxis, Tooltip } from 'react-native-chart-kit';
import ChartFilter from './ChartFilter';
import Card from './Card';
import ThemeContext from '../context/ThemeContext';
import StockContext from '../context/StockContext';
import { fetchHistoricalData } from '../utils/api/stock-api';
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from '../utils/helpers/date-helper';
import { chartConfig } from '../constants/config';

const Chart = () => {
  const [filter, setFilter] = useState('1W');
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);
      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(stockSymbol, filter);
        console.log('0000999-----', result);
        setData(result);
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <Card>
      <View style={styles.filterContainer}>
        {Object.keys(chartConfig).map((item) => (
          <ChartFilter
            key={item}
            text={item}
            active={filter === item}
            onClick={() => {
              setFilter(item);
            }}
          />
        ))}
      </View>
      <LineChart
        data={{
          labels: data.map((item) => item.date),
          datasets: [
            {
              data: data.map((item) => item.close),
            },
          ],
        }}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: darkMode ? '#111827' : '#ffffff',
          backgroundGradientFrom: darkMode ? '#111827' : '#ffffff',
          backgroundGradientTo: darkMode ? '#111827' : '#ffffff',
          color: (opacity = 1) => `rgba(49, 46, 129, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(129, 140, 248, ${opacity})`,
          strokeWidth: 2,
        }}
        bezier
        style={styles.chartStyle}
        yAxisSuffix="k"
        xLabelsOffset={-10}
        withInnerLines={false}
        withOuterLines={false}
        withDots={false}
        withShadow={false}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Chart;
