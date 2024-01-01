import { useState } from 'react';
import { StyleSheet, View, Text, TextInput} from "react-native";

import SearchButton from "../components/SearchButton";
import MenuButton from "../components/MenuButton";
import Logo from "../components/Logo";
import Search from '../components/Search';


export default function Header(){

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const openSearchForm = () => {
        setIsModalVisible(true);
    }
  
    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const openSideMenu = () => {
        /**aaaaa */
    }

    return(
        <View style={styles.headerContainer}>
            <SearchButton showFormSearch={openSearchForm}/>
            <Logo/>
            <MenuButton showSideMenu={openSideMenu}/>

            <Search isVisible={isModalVisible} onClose={onModalClose}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder='Search by author or type'
                />
            </Search>
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
    searchInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        borderColor: '#ccc'
    }
});
