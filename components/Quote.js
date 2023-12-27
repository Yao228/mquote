import { StyleSheet, View, Text, Pressable } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Quote({quote, type}){
    return(
        <LinearGradient 
            colors={['#ffe9d1', '#f8e7d7', '#e2f8f6']}
            style={styles.quoteContainer}
        >
            <View>
                <Fontisto name="quote-left" size={24} color="black" style={styles.quoteIcone} />
            </View>
            <View>
                <Text style={styles.quoteText}>{quote}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.quoteType}>
                <Text style={styles.quoteTypeText}>{type}</Text>
            </View>
            <View style={styles.quoteButtons}>
                <Pressable onPress={() => alert("Je partage")} style={styles.quoteButton}>
                    <Ionicons name="share-social-outline" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => alert("Je télécharge")} style={styles.quoteButton}>
                    <AntDesign name="download" size={24} color="black" />
                </Pressable>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    quoteContainer: {
        backgroundColor: '#ffe9d1',
        paddingHorizontal:20,
        height:460
    },
    quoteText: {
        fontSize: 45,
        fontFamily: 'TestDomaineText-Medium',
        lineHeight:55,
        paddingVertical:20
    },
    quoteIcone: {
        top:-13,
        fontSize:30
    },
    separator:{
        paddingVertical:3,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    quoteType: {
        paddingVertical:5,
    },
    quoteTypeText: {
        fontSize:18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#855088'
    },
    quoteButtons: {
        paddingVertical:5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:3,
    },
    quoteButton:{
        width:50,
        height: 50,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2
    }
});
