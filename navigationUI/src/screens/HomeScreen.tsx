import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types/navigationTypes";
import { useState } from "react";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function HomeScreen({ navigation }: Props) {
    const [name, setName] = useState('');
    
    return <View><Text>Home     Screen</Text></View>;
}
