import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import MostPopularCard from '../components/molecules/MostPopularCard'
import PlantCard from '../components/molecules/PlantCard'
import FilterButton from '../components/molecules/FilterButton';
import Navbar from '../components/molecules/NavBar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState({
    mostPopular: [],
    items: [],
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<{ id: string}[]>([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(
        'https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/'
      );
      return response.data.body.data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return {
        mostPopular: [],
        items: [],
      };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi();
      setApiData(data);
    };

    fetchData();
  }, []);

  function showUserNickName(userName: string) {
    if (userName.length <= 8) return userName;
    return `${userName.slice(0, 7)}...`;
  }

  const filterPlantsByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleFavorite = (item: any) => {
    if (favorites.some((favorite) => favorite.id === item.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const renderFilterButtons = () => {
    const categories = ['All', 'Indoor', 'Outdoor'];

    return categories.map((category) => (
      <FilterButton
        key={category}
        category={category}
        selected={selectedCategory === category}
        onPress={() => filterPlantsByCategory(category)}
      />
    ));
  };

  const filteredPlants = (apiData.items as any[]).filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.Header}>
          <View style={styles.SubContainer}>
            <View style={styles.profileContainer}>
              <Text style={styles.HeaderText}>
                Hi, {showUserNickName('Matheus asexual')}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen' as never)}
              >
                <Image
                  style={styles.UserIconImage}
                  source={require('../assets/userIcon.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.MostPopularItems}>
              <Text style={styles.MostPopularText}>Most Popular</Text>
              <ScrollView
                style={styles.MostPopularScrollView}
                horizontal={true}
              >
                {(apiData.mostPopular as any[]).map((item) => (
                  <MostPopularCard
                    key={item.id}
                    item={item}
                    toggleFavorite={toggleFavorite}
                    isFavorite={favorites.some((favorite) => favorite.id === item.id)}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={styles.FilterButtonsContainer}>
              {renderFilterButtons()}
            </View>
            <ScrollView style={styles.PlantCardsContainer}>
              {filteredPlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  toggleFavorite={toggleFavorite}
                  isFavorite={favorites.some((favorite) => favorite.id === plant.id)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  Header: {
    flex: 0.5,
    width: '100%',
  },
  SubContainer: {
    flex: 1,
    margin: 24,
  },
  profileContainer: {
    height: 48,
    display: 'flex',
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  HeaderText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    overflow: 'hidden',
    width: 200,
    color: '#000',
  },
  UserIconImage: {
    width: 30,
    height: 30,
  },
  MostPopularItems: {
    display: 'flex',
    flex: 1,
    gap: 24,
    marginTop: 30,
  },
  MostPopularText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: -4,
  },
  MostPopularScrollView: {
    flex: 1,
    gap: 16,
  },
  FilterButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  PlantCardsContainer: {
    marginTop: 1,
  },
});

export default HomeScreen;