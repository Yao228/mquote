import { StyleSheet, View, Text, Pressable, Image, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Avatar = require("../assets/images/avatar.png");

export default function Author({author}){
    return (
        <SafeAreaView style={styles.authorContainer}>
            <View style={styles.authorContein}>
                <View style={styles.authorImage}>
                    <Image source={Avatar} style={styles.authorAvatar}/>
                </View>
                <View style={styles.authorName}>
                    <View>
                        <Text style={styles.authorText}>{author}</Text>
                    </View>
                </View>
            </View>
            <Pressable 
            onPressIn={() => alert("More Quote")}
            style={styles.moreQuoteContainer}>
                <Text style={styles.moreQuoteLink}>Discover more</Text>
                <AntDesign name="arrowright" size={24} color="#5479fe" />
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    authorContainer: {
        width: '95%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius:2,
        paddingHorizontal:20,
        alignSelf: 'flex-end',
        top:-55,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    authorContein:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
    },
    authorText:{
        fontSize:16,
        paddingVertical:10,
        fontFamily: 'Adrianna-Regular'
    },
    moreQuoteContainer:{
        paddingVertical:10,
        paddingHorizontal:60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap:3,
        
    },
    moreQuoteLink: {
        color: '#5479fe',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Adrianna-Bold'
    },
    authorAvatar:{
        width:64,
        height:64
    }
});