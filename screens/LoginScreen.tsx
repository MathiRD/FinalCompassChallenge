import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GlobalStyles } from "../constants/styles";


const LoginScreen = () => {
    const navigation: any = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleLogin = async () => {
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth,email,password);
            navigation.navigate('Home');
        } catch {error} {
            console.error('Failed to find user:' , error);
        }
    };

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.createAccountText}>Create your account</Text>
      </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.colors.secondaryBg
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'Poppins-Bold',
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'SourceSans-Regular',
        backgroundColor: GlobalStyles.colors.primaryBg
      },
      button: {
        width: '80%',
        height: 40,
        backgroundColor: GlobalStyles.colors.primaryColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: GlobalStyles.colors.primaryBg,
        fontSize: 16,
        fontWeight: 'bold',
      },
      error: {
        color: '#ff0000',
        marginTop: 10,
        fontSize: 16,
      },
      createAccountText: {
        marginTop: 10,
        color: '#204330',
      },
})


export default LoginScreen;