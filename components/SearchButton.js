import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function SearchButton({showFormSearch}){
    return(
        <View style={styles.headerSearch}>
            <Pressable onPress={showFormSearch}>
                <Ionicons name="search-outline" size={34} color="black" style={styles.headerSearchIcon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    headerSearch: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSearchIcon:{
        transform: [{rotateY: '180deg'}]
    }
});
