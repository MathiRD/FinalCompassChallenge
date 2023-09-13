import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.NavbarContainer}>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => navigation.navigate('Home' as never)}
      >
        <Text style={styles.NavbarButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => navigation.navigate('Favorites' as never)}
      >
        <Text style={styles.NavbarButtonText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.NavbarButton}
        onPress={() => navigation.navigate('Cart' as never)}
      >
        <Text style={styles.NavbarButtonText}>Cart</Text>
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

export default Navbar;