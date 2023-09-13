import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { plant } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={headerStyles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={headerStyles.headerText}>Details</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.heartButton} onPress={toggleFavorite}>
            <Icon name={isFavorite ? 'heart' : 'heart-o'} size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: plant.image }} style={styles.image} />
      <Text style={styles.title}>{plant.title}</Text>
      <Text style={styles.description}>{plant.description}</Text>
      <Text style={styles.price}>${plant.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.totalText}>Total: ${parseFloat(plant.price * quantity).toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('Cart')} // Navegação para o carrinho
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const headerStyles = {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: windowWidth,
      height: 98,
      backgroundColor: 'white',
      borderBottomWidth: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      paddingLeft: 16,
      paddingRight: 16,
    },
    headerText: {
      color: '#000',
      fontFamily: 'Poppins-Bold',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 24,
    },
  };
  
  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 16,
    },
    image: {
      width: windowWidth,
      height: 247,
    },
    title: {
      marginLeft: 24,
      marginTop: 16,
      fontSize: 20,
      fontWeight: '600',
      color: '#000',
      fontFamily: 'Poppins-Bold',
      lineHeight: 24,
    },
    description: {
      marginLeft: 24,
      marginTop: 8,
      fontSize: 16,
      color: '#969595',
    },
    price: {
      marginLeft: 24,
      marginTop: 8,
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black',
    },
    addButton: {
      backgroundColor: '#418B64',
      width: 114,
      height: 48,
      borderRadius: 8,
      alignSelf: 'flex-end',
      marginRight: 24,
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    addButtonText: {
      fontSize: 14,
      color: 'white',
    },
    headerButtons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    heartButton: {
      paddingRight: 8,
    },
    bottomContainer: {
      width: windowWidth,
      height: 92,
      backgroundColor: '#FFF',
      borderTopWidth: 1,
      borderTopColor: 'rgba(0, 0, 0, 0.16)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 0.805,
      paddingRight: 0.601,
      shadowColor: 'rgba(0, 0, 0, 0.16)',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 2,
      position: 'absolute',
      bottom: 0,
    },
    totalText: {
      fontSize: 16,
      marginLeft: 10,
      fontFamily: 'Poppins-Bold',
    },
    addToCartButton: {
      backgroundColor: '#418B64',
      width: 114,
      height: 48,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: 24,
    },
    addToCartButtonText: {
      fontSize: 14,
      color: 'white',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 320,
    },
    quantityButton: {
      backgroundColor: '#E5E5E5',
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    },
    quantityText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
  };
  

export default DetailsScreen;