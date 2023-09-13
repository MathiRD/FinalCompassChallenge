import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('FirstScreen');
  };

  return (
    <>
      <View style={[styles.container, { width, height }]}>
        <View style={styles.circle}></View>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Matheus</Text>
          <Text style={styles.profileEmail}>mathirodrigues@yahoo.com.br</Text>
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    position: 'absolute',
    backgroundColor: '#969595',
    borderRadius: 300,
    borderWidth: 1,
    borderColor: 'black',
    left: 24,
    top: 160,
    zIndex: 1,
  },
  header: {
    width: '105%',
    marginBottom: 5,
    alignItems: 'center',
    elevation: 4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: -6
  },
  title: {
    marginTop: 25,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 30,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileName: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    lineHeight: 24,
    bottom: -100,
  },
  profileEmail: {
    color: '#969595',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 14,
    marginTop: 4,
    bottom: -110,
    marginLeft: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginTop: 8,
    bottom: -145,
  },
  logoutText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 16,
    bottom: -175,
    left: -165,
  },
});

export default ProfileScreen;
