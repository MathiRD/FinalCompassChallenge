import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface product {
    image: any;
    price: number;
    name: string;
}

const productImage = require('../assets/productImage.jpeg')

const mockAPI: product[] = [
    {
        image: productImage,
        name: 'Green Vines',
        price: 9.20
    },
    {
        image: productImage,
        name: 'Green Vines',
        price: 9.20
    },
    {
        image: productImage,
        name: 'Green Vines',
        price: 9.20
    },
    {
        image: productImage,
        name: 'Green Vines',
        price: 9.20
    },
    {
        image: productImage,
        name: 'Green Vines',
        price: 9.20
    },
];

const HomeScreen = () => {
    const navigation: any = useNavigation();
    function showUserNickName(userName: string) {
        if (userName.length <= 8) return userName;
        userName = `${userName.slice(0,7)}...`;
        return userName;
    }

    return (
        <View style={styles.MainContainer}>
            <View style={styles.Header}>
                <View style={styles.SubContainer}>
                    <View style={styles.profileContainer}>
                        <Text style={styles.HeaderText}>
                            Hi, {showUserNickName('Matheus')}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginFirst')}>
                            <Image style={styles.UserIconImage}source={require('../assets/userIcon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MostPopularItems}>
                        <Text style={styles.MostPopularText}>Most Popular</Text>
                        <ScrollView style={styles.MostPopularScrollView} horizontal={true}>
                            {mockAPI.map((product, index) => (
                                <View style={styles.itemsScrollSide}
                                key={index}
                                >
                                  <View style={styles.ProductImageContainer}>
                                    <Image style={styles.productImage} source={product.image}/>
                                  </View>
                                  <View>
                                    <Text>{product.name}</Text>
                                    <Text>$ {product.price.toFixed(2)}</Text>
                                    <TouchableOpacity>
                                        <Text>Add to Cart</Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Indoor</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Outdoor</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    Header: {
        flex: 50,
        width: '100%'
    },
    SubContainer: {
        flex: 100,
        margin: 24,
        marginTop: 44  
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 48,
        marginBottom: 40
    },
    HeaderText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600',
        overflow: 'hidden',
        width: 200,
        color: '#000'
    },
    UserIconImage: {
        width: 30,
        height: 30
    },
    MostPopularItems: { //
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 40,
        width: '100%',
    },
    MostPopularText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    MostPopularScrollView: { //
        flexDirection: 'row',
    },
    itemsScrollSide: {
        width: 287,
        height: 136,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        marginLeft: 4
    },
    ProductImageContainer: {
        flex: 50,
        height: '100%'
    },
    productImage: {
        width: '100%',
        height: '100%'
    }
})

export default HomeScreen;