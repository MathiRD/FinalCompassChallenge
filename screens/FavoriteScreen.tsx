import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/molecules/NavBar';

const Favorite = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      price: '$29.99',
      imageUri: 'https://gardenerspath.com/wp-content/uploads/2021/01/Fiddle-Leaf-Fig-Plant-in-a-Small-Pot.jpg',
    },
    {
        id: 2,
        name: "Succulent Collection",
        price: '$19.99',
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sWaGZCFE2Jy45L3-QcjJaOd3tYrE-T9YHg&usqp=CAU',
      },
      {
        id: 5,
        name: 'Lavender',
        price: '$14.99',
        imageUri: 'https://www.bhg.com/thmb/n1DGrFWiF5E3ktp3u6k3YcixXOg=/1280x0/filters:no_upscale():strip_icc()/bettys-blue-english-lavender-54fb2268-cc05a8a06b71424bbf689f066c0b91b7.jpg',
      },
      {
        id: 7,
        name: 'Aloe Vera',
        price: '$12.99',
        imageUri: 'https://cdn.awsli.com.br/2500x2500/2446/2446161/produto/167472313/20230817_091329-fotor-20230817154849-e3fynodfe6.jpg',
      },
      {
        id: 9,
        name: 'Spider Plant',
        price: '$18.99',
        imageUri: 'https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg',
      },
  ]);

  const removeItem = (itemId: any) => {
    
    const updatedFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton} />
        <Text style={styles.headerText}>Favorites</Text>
      </View>

      {favorites.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.removeItemButton}
            onPress={() => removeItem(item.id)}
          >
            <Image source={require('../assets/favorite.png')} style={styles.FavoriteIcon} />
          </TouchableOpacity>
        </View>
      ))}
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    overflow: 'hidden',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    paddingBottom: 8,
  },
  backButton: {
    width: 0.39,
    height: 0.39,
    transform: [{ rotate: '180deg' }],
    transformOrigin: '0 0',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    textAlign: 'left'
  },
  itemContainer: {
    backgroundColor: '#ECF8F3',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10
  },
  itemImage: {
    width: 91,
    height: 73,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    marginTop: -18
  },
  itemPrice: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    marginTop: -4,
  },
  removeItemButton: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 9999,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10
  },
  FavoriteIcon: {
    marginTop: 8,
    marginLeft: 8
  }
});

export default Favorite;