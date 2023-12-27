import { 
    StyleSheet,
    Text, 
    View, 
    Pressable, 
    Alert 
    } from "react-native";

export default function Footer(){
    return (
        <View style={styles.footerContainer}>
            <Pressable 
                onPress={() => alert("Get new quote")}
                style={styles.footerButton}
            >
                <Text style={styles.footerText}>Get new quote</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer:{
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto',
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    footerButton:{
        backgroundColor: '#841584',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius:2
    },
    footerText:{
        color: '#ffffff',
    }
});