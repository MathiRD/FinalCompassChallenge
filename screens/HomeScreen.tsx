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
            <ScrollView>
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
                                    <View 
                                    style={styles.product}
                                    width={287}
                                    height={136}
                                    radius={8}
                                    shadowColor="#000"
                                    shadowOpacity={0.25}
                                    shadowRadius={4}
                                    elevation={4}
                                    key={index}
                                    >
                                    <View style={styles.ProductImageContainer}>
                                        <Image style={styles.productImage} source={product.image}/>
                                    </View>
                                    <View style={styles.productDescriptionContainer}>
                                        <Text style={styles.productName}>{product.name}</Text>
                                        <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
                                        <TouchableOpacity style={styles.addToCartButton}>
                                            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -8, marginBottom: 10, }}>
                    <TouchableOpacity>
                        <Text
                        style={{
                            color: '#000',
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 24,
                            marginLeft: 27
                        }}>
                            All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                        style={{
                            color: '#969595',
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20,
                            fontWeight: '500',
                            lineHeight: 24
                        }}
                        >Indoor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                        style={{
                            color: '#969595',
                            fontFamily: 'Poppins-Regular',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 24,
                            marginRight: 27
                        }}
                        >Outdoor</Text>
                    </TouchableOpacity>
                </View>  
                  {mockAPI.map((product, index) => (
                    <View 
                    style={styles.productCard}
                    width={300}
                    height={136}
                    radius={8}
                    shadowColor="#000"
                    shadowOpacity={0.25}
                    shadowRadius={4}
                    elevation={4}
                    key={index}
                    >
                    <View >
                        <Image  source={product.image}/>
                    </View>
                    <View >
                        <Text >{product.name}</Text>
                        <Text >$ {product.price.toFixed(2)}</Text>
                        <TouchableOpacity >
                            <Text >Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                  ))}
                <View>

                </View>
            </ScrollView>     	
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
        flex: 0.5,
        width: '100%'
    },
    SubContainer: {
        flex: 1,
        margin: 24,

    },
    profileContainer: {
        height: 48,
        display: 'flex',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
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
    MostPopularItems: {
        display: 'flex',
        flex: 1,
        gap: 24,
        marginTop: 44,
    },
    MostPopularText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 21,
        fontStyle: 'normal',
        fontWeight: '600',
        marginBottom: -4
    },
    MostPopularScrollView: {
        flex: 1,
        gap: 16,

    },
    product: {
        flex: 1,
        width: 287,
        height: 136,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 16,
        overflow: 'hidden',
        borderRadius: 8,
        marginBottom: 3
        
    },
    ProductImageContainer: {
        flex: 0.5,
        height: '100%'
    },
    productImage: {
        width: '100%',
        height: '100%'
    },
    productDescriptionContainer: {
        flex: 0.5,
        height: '100%',
        padding: 8,
        backgroundColor: '#fff',
      },
    productName: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
      },
      addToCartButton: {
        width: 121,
        height: 20,
        borderRadius: 8,
        backgroundColor: '#418B64',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 5
      },
    addToCartButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
    productPrice: {
        color: '#000',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
      },
      productCard: {
        flex: 1,
        width: 287,
        height: 136,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 16,
        overflow: 'hidden',
        borderRadius: 8,
        marginBottom: 3,
        marginLeft: 60
        
      }
})

export default HomeScreen;