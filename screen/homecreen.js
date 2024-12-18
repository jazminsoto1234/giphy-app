import React from 'react';
import { Text , StyleSheet, SafeAreaView, Image, ImageBackground, View, Button} from "react-native";
import MainScreen from './searchcreen';
import { useNavigation } from '@react-navigation/native';


function HomeScreen(){

  const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
        
              <ImageBackground source={require('../assets/icon.png')} style={styles.backgroundImage} resizeMode="cover"  >
                <Image source={require('../assets/favicon.png')} style={styles.image}>
                  {/* <Text>Hola</Text> -> No puede estar un texto dentro del componente imagenc osea no pued etener hijos */}
                </Image>
                <Text>Giphy App</Text>
              </ImageBackground>
        
              
                  
              <View style={[styles.view] } >
                <Button color='violet' onPress={() => navigation.navigate('MainScreen') } title="Iniciar" />
                {/* <Text style={styles.text}>Notice that the status bar has light text!</Text> */}
              </View>
        
              {/* <View  style={[styles.button, {backgroundColor:'blue'}] } >
                <Text style={styles.text}>Notice that the status bar has light text!</Text> */}
                {/* <StatusBar style="dark" /> */}
              {/* </View> */}
            </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Expandir todo lo que pueda
  },

  backgroundImage: {
    flex: 1, // Ocupa todo el contenedor
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    width: '80',
    height: '80',
  },

  text: {
    color: '#000',
  },



  view: {
    //backgroundColor: "#000", // Color de fondo del botón
    //padding: 20, // Relleno interno
    paddingVertical: 20, // Espaciado vertical
    paddingHorizontal: 120, // Espaciado horizontal
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    // Bordes redondeados
    width: '100%',
    height: '10%',
    //alignItems: 'center',
  },

  button:{
    cursor:'pointer',
    borderRadius: 8,
    color: 'violet'

  },

  buttonText: {
    color: "#fff", // Color del texto
    fontSize: 16, // Tamaño de letra
    fontWeight: "bold", // Negrita
    textAlign: "center", // Alinear el texto
  },


  touchable: {
    borderRadius: 8, // Bordes redondeados
    overflow: "hidden", // Evita desbordes de subcomponentes
  },

});


export default HomeScreen;