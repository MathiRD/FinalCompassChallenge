import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType ,ImageBackground } from 'react-native';
import { GlobalStyles } from "../constants/styles";
const LoginScreen = () => {
    const backgroundImage: ImageSourcePropType = require('../assets/Background.jpg');
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage}>
                <View style={styles.backgroundImage}/>
            </ImageBackground>

            <View style={styles.MainContainer}>
                <Text style={styles.Title}>
                    Plant{'\n'}Paradise
                </Text>
                <Text>
                    Find your favorite plants and{'\n'}help the enviroment
                </Text>
                <View  style={styles.buttonSubContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.buttonText}>Sing Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '55%'
    },
    MainContainer: {
        flex: 1,
        padding: 25,
        gap: 16,
        backgroundColor:  GlobalStyles.colors.primaryBg
    },
    Title: {

    },
    SubTitle: {

    },
    buttonContainer: {
        width: '100%',
        height: 48,
        backgroundColor: GlobalStyles.colors.primaryColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    buttonSubContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 16,
    },
    buttonText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: GlobalStyles.colors.primaryBg,
        textAlign: 'center',
    }
}
)