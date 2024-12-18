// import { StatusBar } from 'expo-status-bar'; -> 
//import {  SafeAreaView , StyleSheet, Text, View } from 'react-native';

// Text -> Es el texto 
// View -> Una clase que representa los div de html
//SafeAreaView-> Usa la pantalla necesaria
// Touchable -> Lo que da interaccion al tocarlo es como una capa que hace la interaccion (on press)
// Platform -> En que os del dispositivo estoy trabajando
// StatusBar -> Es una api tanto de react native como expo en el cual se encarga de manejar la barra de estado
// Alert 
// Image -> Es un componente que no puede tener hijos
// ImageBackground -> Colocar imagenes de fondo y permite superposiciones
// Navigation container

import {SafeAreaView , Touchable, Button, StatusBar, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screen/homecreen';
import SearchScreen, { navigationRef } from './screen/searchcreen';
import ResultScreen from './screen/resultscreen';
import MainScreen from './screen/mainscreen';
import HomeScreen from './screen/homecreen';

/* STATUSBAR EN REACT: Es una api que ofrece los atributos de una barra de estado como el: Tamaño 
 STATUSBAR EN EXPO : Color, Animcacion, .. y solo para apis integradas en expo
*/

const Stack = createStackNavigator(); // Creamos un stack que va a contener las pestañas


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


{/* <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen"> */}
        {/* <Stack.Screen name="MyComponent" component={MyComponent} /> */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>

  </NavigationContainer> */}

// const styles = StyleSheet.create({
//   container: {
    
//     flex: 1, // Expandir todo lo que pueda
   
    
//   },
//   backgroundImage: {
//     flex: 1, // Ocupa todo el contenedor
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image:{
//     width: '80',
//     height: '80',
//   },



//   text: {
//     color: '#000',
//   },
//   button: {
//     //backgroundColor: "#000", // Color de fondo del botón
//     padding: 15, // Relleno interno
//     borderRadius: 8, // Bordes redondeados
//     width: '100%',
//     height: '10%',
//   },
//   buttonText: {
//     color: "#fff", // Color del texto
//     fontSize: 16, // Tamaño de letra
//     fontWeight: "bold", // Negrita
//     textAlign: "center", // Alinear el texto
//   },
//   touchable: {
//     borderRadius: 8, // Bordes redondeados
//     overflow: "hidden", // Evita desbordes de subcomponentes
//   },
// });
