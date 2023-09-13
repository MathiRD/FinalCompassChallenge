import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activePage, setActivePage] = useState(route.name);

  useFocusEffect(
    React.useCallback(() => {
      setActivePage(route.name);
    }, [route.name])
  );

  const handleNavigation = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.NavbarContainer}>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => handleNavigation('Home')}
      >
        <Image
          style={styles.ShoppinBag}
          source={
            activePage === 'Home'
              ? require('../../assets/home.png')
              : require('../../assets/homeBlack.png')
          }
        />
        <Text
          style={[
            styles.NavbarButtonText,
            { color: activePage === 'Home' ? 'green' : '#000' },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => handleNavigation('Favorites')}
      >
        <Image
          style={styles.ShoppinBag}
          source={
            activePage === 'Favorites'
              ? require('../../assets/FavoriteGreen.png')
              : require('../../assets/favorite_border.png')
          }
        />
        <Text
          style={[
            styles.NavbarButtonText,
            { color: activePage === 'Favorites' ? 'green' : '#000' },
          ]}
        >
          Favorites
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => handleNavigation('Cart')}
      >
        <Image
          style={styles.ShoppinBag}
          source={
            activePage === 'Cart'
              ? require('../../assets/ShoppingGreen.png')
              : require('../../assets/shopping_bagBlack.png')
          }
        />
        <Text
          style={[
            styles.NavbarButtonText,
            { color: activePage === 'Cart' ? 'green' : '#000' },
          ]}
        >
          Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NavbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopColor: 'lightgray',
    borderTopWidth: 0.5,
  },
  NavbarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavbarButtonText: {
    fontWeight: 'bold',
  },
  ShoppinBag: {
    width: 20,
    height: 20,
  },
});

export default Navbar;
