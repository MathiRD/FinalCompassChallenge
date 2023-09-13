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

const HomeScreen = () => {
  const navigation = useNavigation();

  const [apiData, setApiData] = useState({
    mostPopular: [],
    items: [],
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const renderFilterButtons = () => {
    const categories = ['All', 'Indoor', 'Outdoor'];

    return categories.map((category) => (
      <TouchableOpacity
        key={category}
        style={[styles.filterButton]}
        onPress={() => filterPlantsByCategory(category)}
      >
        <Text
          style={[
            styles.filterButtonText,
            selectedCategory === category && styles.selectedFilterButtonText,
          ]}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ));
  };

  const filteredPlants = apiData.items.filter((item) => {
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
                onPress={() => navigation.navigate('ProfileScreen')}
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
                {apiData.mostPopular.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      navigation.navigate('DetailScreen', { plant: item });
                    }}
                  >
                    <View style={styles.productCard}>
                      <View style={styles.ProductImageContainer}>
                        <Image
                          source={{ uri: item.image }}
                          style={styles.productImage}
                        />
                      </View>
                      <View style={styles.productDescriptionContainer}>
                        <Text style={styles.productName}>{item.title}</Text>
                        <Text style={styles.productPrice}>
                          $ {item.price.toFixed(2)}
                        </Text>
                        <TouchableOpacity style={styles.addToCartButton}>
                          <Text style={styles.addToCartButtonText}>
                            Add to cart
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.FilterButtonsContainer}>
              {renderFilterButtons()}
            </View>
          <View>
            <ScrollView style={styles.PlantCardsContainer}>
              {filteredPlants.map((plant) => (
                <TouchableOpacity
                  key={plant.id}
                  onPress={() => {
                    navigation.navigate('DetailScreen', { plant });
                  }}
                >
                  <View style={styles.PlantCard}>
                    <Image
                      source={{ uri: plant.image }}
                      style={styles.PlantCardImage}
                    />
                    <Text style={styles.PlantCardTitle}>{plant.title}</Text>
                            <Text style={styles.PlantCardPrice}>
                            $ {plant.price.toFixed(2)}
                        </Text>
                    <TouchableOpacity style={styles.PlantCardAddToCartButton}>
                        <Image
                        source={require('../assets/shopping_bag.png')}
                        style={styles.ShoppingIcon}
                        />
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          </View>
        </View>
      </ScrollView>
      {/* Navbar Container */}
      <View style={styles.NavbarContainer}>
        <TouchableOpacity
          style={styles.NavbarButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.NavbarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.NavbarButton}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Text style={styles.NavbarButtonText}>Favor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.NavbarButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.NavbarButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 44,
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
  productCard: {
    flex: 1,
    width: 287,
    height: 136,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 16,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 3,
    elevation: 4,
  },
  ProductImageContainer: {
    flex: 0.5,
    height: '100%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productDescriptionContainer: {
    flex: 0.5,
    height: '100%',
    padding: 8,
    backgroundColor: '#fff',
  },
  productName: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  addToCartButton: {
    width: 121,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#418B64',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 110,
    marginLeft: 15,
    position: 'absolute',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  filterButtonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  FilterButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  filterButton: {
    flex: 0.3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,
  },
  filterButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: '#808080',
  },
  selectedFilterButtonText: {
    color: '#000',
  },
  PlantCardsContainer: {
    marginTop: 1,
  },
  PlantCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderTopRightRadius: 20,
    marginBottom: 20,
    elevation: 4,
  },
  PlantCardImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  PlantCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  PlantCardPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    flex: 0.1,
    width: 60,
    marginLeft: 10,
    marginBottom: 6,
  },
  PlantCardAddToCartButton: {
    backgroundColor: '#418B64',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 20,
    marginBottom: 4,
    marginTop: 222,
    flex: 1,
    width: 29,
    marginLeft: 300,
    position: 'absolute',
  },
  ShoppingIcon: {
    width: 15,
    height: 15,
  },
  NavbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  NavbarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavbarButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;