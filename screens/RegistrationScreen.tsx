import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { GlobalStyles } from '../constants/styles';

initializeApp(firebaseConfig);

const RegistrationScreen = () => {
  const navigation: any = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSucessModal, setIsSucees] = useState(false);

  useEffect(() => {
    getAuth();
  }, []);
  const ShowSucess = () => {
    setIsSucees(true);
  }
  const handleSignup = async () => {
    const auth = getAuth();
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      ShowSucess();
      navigation.navigate('Login');
    } catch (error) {
      setIsFailed(true);
      setIsLoading(false);
    }
  };

  const GoToLoginScreen = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color={GlobalStyles.colors.primaryBg} size={'small'}/>
        ) : (
          <Text style={styles.buttonText}>Register</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.GoToLoginText} onPress={GoToLoginScreen}>
        Do you already have an account? Go to the login.
      </Text>

      <Modal
      visible={isFailed}
      transparent={true}
      animationType='fade'
      onRequestClose={() => setIsFailed(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Incorrect Email or Password</Text>
            <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setIsFailed(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>          
          </View>
        </View>
      </Modal>
      <Modal
      visible={isSucessModal}
      transparent={true}
      animationType='fade'
      onRequestClose={() => setIsSucees(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Successfully registered!</Text>
            <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setIsSucees(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondaryBg,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginBottom: 20,
    color: GlobalStyles.colors.primaryColor, 
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: GlobalStyles.colors.primaryBg,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderColor: GlobalStyles.colors.secondaryColor,
    borderWidth: 1,
  },
  button : {
    width: '80%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primaryColor
  },
  buttonText: {
    color: GlobalStyles.colors.primaryBg,
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    color: '#ff0000',
    marginTop: 10,
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0005'
  },
  modalContent: {
    marginLeft: 41,
    width: '80%',
    backgroundColor: GlobalStyles.colors.primaryBg,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',

  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  GoToLoginText: {
    marginTop: 20,
    color: '#204330',
    fontSize: 16,
  },
});

export default RegistrationScreen;