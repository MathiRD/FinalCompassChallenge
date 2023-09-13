import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';

initializeApp(firebaseConfig);

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setIsFailed(true);
      return;
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      setIsSuccessModalVisible(true);
    } catch (error) {
      setIsFailed(true);
      setIsLoading(false);
    }
  };

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackButtonPress} 
        >
          <Text style={styles.backButtonLabel}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <Text style={styles.mockTextEmail}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.mockTextPassword}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.mockTextPassConfirm}>PASSWORD CONFIRMATION</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {isFailed && (
        <Text style={styles.error}>
          Password and Confirm Password do not match.
        </Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Modal para exibir mensagem de erro */}
      <Modal
        visible={isFailed}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsFailed(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Password and Confirm Password do not match.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsFailed(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para exibir mensagem de sucesso */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Successfully registered!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsSuccessModalVisible(false)}
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
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 25,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 8,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    left: 2,
    top: -10,
  },
  backButtonLabel: {
    fontSize: 32,
    color: 'black',
    paddingLeft: 12,
  },
  mockTextEmail: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
  mockTextPassword: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
  mockTextPassConfirm: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    marginBottom: 30,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#418B64',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#418B64',
    padding: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
