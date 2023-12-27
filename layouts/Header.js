import { StyleSheet, View, Text } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Header(){
    return(
        <View style={styles.headerContainer}>
            <View style={styles.headerSearch}>
                <Ionicons name="search-outline" size={34} color="black" />
            </View>
            <View style={styles.headerLogo}>
                <Text style={styles.logo}>MQuote</Text>
            </View>
            <View style={styles.headerMenu}>
                <SimpleLineIcons name="menu" size={34} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        position:'absolute',
        top:0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        margin:'auto',
        paddingHorizontal: 5,
        paddingVertical: 40,
    },
    headerSearch: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLogo: {
        width: '50%',
        justifyContent:'center',
        alignItems: 'center',
    },
    headerMenu: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        fontSize:24,
        fontFamily: 'AdriannaDemibold',
        fontWeight: 'normal',
    }
});
