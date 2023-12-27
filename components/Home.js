import { StyleSheet, View, Text } from "react-native";
import Quote from "./Quote";

export default function Home(){
    return (
        <View style={styles.homeContainer}>
            <Quote quote="Just doing as well as you did last time is not good enough."/>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer:{
        top:110,
        position: 'absolute',
        backgroundColor: '#fff',
        margin: 'auto',
        paddingHorizontal: 5,
        paddingVertical: 40,
        width: '100%',
        height: 'auto',
    }
});