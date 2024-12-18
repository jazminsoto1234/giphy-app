import { useState } from "react";
import { Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ListAllGifs from "../components/Listallgifs"
import { useNavigation } from "@react-navigation/native";



function MainScreen(){

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.touchable}  onPress={() => navigation.navigate('SearchScreen')}>
                <TextInput style={styles.textinput}  placeholder="Search" editable={false}  >
                </TextInput>
            </TouchableOpacity>

            

            {/* Extraer todos los gifs  */}
            <ListAllGifs></ListAllGifs>


        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    touchable :{
        padding: 8,
    },

    textinput: {
        height: 50,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        color: '#333',
        marginBottom: 20,

    }

});

export default MainScreen;