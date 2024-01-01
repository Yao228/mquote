import { StyleSheet, View, Image, Text } from "react-native";

export default function Logo(){
    return (
        <View style={styles.headerLogo}>
            <Text style={styles.logo}>MQuote</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerLogo: {
        width: '50%',
        justifyContent:'center',
        alignItems: 'center',
    },
    logo:{
        fontSize:24,
        fontFamily: 'Adrianna-Regular',
        fontWeight: 'normal',
    }
});