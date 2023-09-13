import { Text, View, StyleSheet } from "react-native"
import Navbar from "../components/molecules/NavBar"
const Cart = () => {
    return(
        <View style={styles.MainContainer}>
            <Text>CART</Text>
            <Navbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
})

export default Cart;