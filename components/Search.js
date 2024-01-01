import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Search({isVisible, children, onClose}){
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Search form</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
      height: 'auto',
      width: '100%',
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: 0,
    },
    titleContainer: {
      height: 30,
      backgroundColor: '#464C55',
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
});
  

