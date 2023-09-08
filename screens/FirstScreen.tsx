import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType ,ImageBackground } from 'react-native';
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
    const navigation: any = useNavigation();
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
                <Text style={styles.SubTitle}>
                    Find your favorite plants and{'\n'}help the enviroment
                </Text>
                <View  style={styles.buttonSubContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

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
        fontSize: 50,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 60,
        letterSpacing: 0,
        textAlign: 'left'

    },
    SubTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'left'
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
        fontFamily: 'SourceSans-Regular',
        fontSize: 21,
        fontWeight: '400'
    }
}
)

export default FirstScreen;