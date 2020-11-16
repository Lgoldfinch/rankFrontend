/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


const taxiData = [
  {
    id: '1',
    provider: 'First Item',
    price: 4.99
  },
  {
    id: '2',
    provider: 'Second Item',
    price: 6
  },
  {
    id: '3',
    provider: 'Third Item',
    price: 5.50
  },
];

const Item = ({ item }) => (
  <View style={styles.itemRow}>
    <Text style={styles.itemProvider}>{item.provider}</Text>
    <Text style={styles.itemPrice}>{item.price}</Text>
  </View>
);


const App: () => React$Node = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Rank</Text>
              <FlatList
                data={taxiData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
   
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.black,
  },
  itemProvider: {
    fontSize: 20
  },
  itemPrice: {
    marginLeft: 150,
    fontSize: 18
  },
  itemRow: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 40,
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4
  },
});

export default App;
