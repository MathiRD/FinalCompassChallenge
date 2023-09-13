import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlantCard = ({ plant, toggleFavorite, isFavorite } : {plant: any, toggleFavorite: (item:any)=> void, isFavorite: boolean}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { plant })}>
      <View style={styles.PlantCard}>
        <Image source={{ uri: plant.image }} style={styles.PlantCardImage} />
        <Text style={styles.PlantCardTitle}>{plant.title}</Text>
        <Text style={styles.PlantCardPrice}>$ {plant.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.PlantCardFavoriteButton}
          onPress={() => toggleFavorite(plant)}
        >
          <Image
            source={
              isFavorite
                ? require('../../assets/favorite.png')
                : require('../../assets/favorite_border.png')
            }
            style={styles.FavoriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.PlantCardAddToCartButton}>
          <Image source={require('../../assets/shopping_bag.png')} style={styles.ShoppingIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  PlantCardFavoriteButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  FavoriteIcon: {
    width: 15,
    height: 15,
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
});

export default PlantCard;
