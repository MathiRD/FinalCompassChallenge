import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      navigation.navigate('Home');

      console.log('Usuário logado com sucesso!', userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonLabel}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.OverTextEmail}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="E-MAIL"
        placeholderTextColor="#969595"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.OverText}>PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="#969595"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
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
  headerTitle: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },
  OverTextEmail: {
    marginRight: 300,
    marginBottom: 3,
    color: 'grey',
  },
  OverText: {
    marginRight: 270,
    marginBottom: 3,
    color: 'grey',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
    marginTop: 2,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#418B64',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default SignInScreen;