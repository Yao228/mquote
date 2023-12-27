import { StyleSheet, View, Text } from "react-native";

export default function Author({author}){
    return (
        <View style={styles.authorContainer}>
            <Text style={styles.authorText}>{author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    authorContainer: {
        width: '95%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        paddingHorizontal:20,
        borderRadius:2,
        top:-55,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    }
});