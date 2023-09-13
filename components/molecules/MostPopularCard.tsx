import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MostPopularCard = ({ item, toggleFavorite, isFavorite } : {item: any, toggleFavorite: (item:any)=> void, isFavorite: boolean}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { plant: item })}
      style={styles.mostPopularCard}
    >
      <View style={styles.mostPopularImageContainer}>
        <Image source={{ uri: item.image }} style={styles.mostPopularImage} />
      </View>
      <View style={styles.mostPopularDescriptionContainer}>
        <Text style={styles.mostPopularName}>{item.title}</Text>
        <Text style={styles.mostPopularPrice}>$ {item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.mostPopularFavoriteButton}
          onPress={() => toggleFavorite(item)}
        >
          <Image
            source={
              isFavorite
                ? require('../../assets/favorite.png')
                : require('../../assets/favorite_border.png')
            }
            style={styles.mostPopularFavoriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mostPopularAddToCartButton}
          onPress={() => {}}
        >
          <Text style={styles.mostPopularAddToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mostPopularCard: {
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
  mostPopularImageContainer: {
    flex: 0.5,
    height: '100%',
  },
  mostPopularImage: {
    width: '100%',
    height: '100%',
  },
  mostPopularDescriptionContainer: {
    flex: 0.5,
    height: '100%',
    padding: 8,
    backgroundColor: '#fff',
  },
  mostPopularName: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  mostPopularPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
  mostPopularFavoriteButton: {
    position: 'absolute',
    top: 7,
    left: -130,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  mostPopularFavoriteIcon: {
    width: 15,
    height: 15,
  },
  mostPopularAddToCartButton: {
    backgroundColor: '#418B64',
    borderRadius: 20,
    marginTop: 112,
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 19,
    marginLeft: 16,
  },
  mostPopularAddToCartText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginBottom: -4,
  },
});

export default MostPopularCard;
