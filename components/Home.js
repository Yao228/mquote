import { StyleSheet, View, Text } from "react-native";
import Quote from "./Quote";
import Author from "./Author";

export default function Home(){
    return (
        <View style={styles.homeContainer}>
            <Quote 
            quote="Just doing as well as you did last time is not good enough."
            type="Lifestyle"
            />
            <Author author="Yao Mawunyo AMEDEKPEDZI"/>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer:{
        top:110,
        position: 'absolute',
        backgroundColor: '#fff',
        margin: 'auto',
        width: '100%',
        height: 'auto',
    }
});