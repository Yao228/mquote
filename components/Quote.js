import { StyleSheet, View, Text } from "react-native";
import { Fontisto } from '@expo/vector-icons';

export default function Quote({quote}){
    return(
        <View style={styles.quoteContainer}>
            <Fontisto name="quote-left" size={24} color="black" />
            <Text style={styles.quoteText}>{quote}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    quoteText: {
        fontSize: 50,
        fontFamily: 'TestDomaineText-Regular',
        lineHeight:65
    }
});