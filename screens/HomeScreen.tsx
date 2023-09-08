import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation: any = useNavigation();

    return (
        <Text>HomeScreenStart</Text>
    )
};

export default HomeScreen;