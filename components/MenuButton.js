import { StyleSheet, View, Pressable } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';


export default function MenuButton({showSideMenu}){
    return(
        <View style={styles.headerMenu}>
            <Pressable onPress={showSideMenu}>
                <SimpleLineIcons name="menu" size={34} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    headerMenu: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
