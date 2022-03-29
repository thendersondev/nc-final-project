import { Text, View, FlatList } from 'react-native';
import styles from '../styles/CompareGamesStyles';
import { StatusBar } from 'expo-status-bar';
import { GameCard } from '../Components/GameCard';
import { v4 as uuidv4 } from 'uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { fetchItems } from '../models/model_items';
import { TextInput } from 'react-native-gesture-handler';

export default function CompareGamesPage({ navigation }) {
  const [query, setQuery] = useState('Xbox SeriesX PS5 Nintendo Switch');
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetchItems().then((items) => {
      setData(Object.values(items));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Compare game prices here!</Text>
      <View>
        <TextInput
          placeholder="Search Here..."
          value={search}
          style={styles.searchBar}
          onChangeText={(text) => {
            setSearch(text);
            setQuery('Xbox SeriesX PS5 Nintendo Switch');
          }}
        ></TextInput>
      </View>
      <View style={styles.catagoriesContainer}>
        <Text style={styles.sortBy}>Sort By:</Text>
        <View style={styles.catagoryButtonsGroup}>
          <TouchableOpacity
            style={styles.catagoryButton}
            onPress={() => setQuery('Xbox SeriesX')}
          >
            <Text style={styles.catagoryButtonText}>Xbox</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.catagoryButton}
            onPress={() => setQuery('PS5')}
          >
            <Text style={styles.catagoryButtonText}>PS5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.catagoryButton}
            onPress={() => setQuery('Nintendo Switch')}
          >
            <Text style={styles.catagoryButtonText}>Nintendo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.catagoryButton}
            onPress={() => setQuery('Xbox SeriesX PS5 Nintendo Switch')}
          >
            <Text style={styles.catagoryButtonText}>All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* uses dummy data */}
      <FlatList
        data={data}
        renderItem={(item, index, separators) => GameCard(item, query, search)}
        extraData={query}
        keyExtractor={uuidv4}
      />

      <StatusBar style="auto" />
    </View>
  );
}
