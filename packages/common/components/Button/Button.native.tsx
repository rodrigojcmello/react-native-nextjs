import {ButtonProps} from "./Button.type";
import {View, Text} from "react-native";

export const Button = ({label}: ButtonProps) => {
    return <View><Text>{label}</Text></View>
}
