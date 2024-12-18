import React, { useState } from 'react';
import { SafeAreaView, Button, View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ViewHistorial from '../components/Viewhistorial';

function SearchScreen(){
  // Usamos un estado de busqueda
    // historial es un array 
    const navigation = useNavigation();
    const [search, setsearch] = useState('');
    const [isEnviado, setisEnviado] = useState(false);
    const [historial, sethistorial] = useState([]);

    // Para controlar el loop infinito
    // useEffect (() =>{
    //     // Si se presiono enter entonces guarda el texto
    //     if(isEnviado){
        
    //         setsearch(search);
    //         // const aux = historial;
    //         const newHistorial = historial; // Copia del historial
    //         if(search != ''){
    //             newHistorial.unshift(search);
    //         }
            
    //         sethistorial(newHistorial);
            
    //         setisEnviado(false);
    //     }

    // }, [search, historial]);

  const handleSearchSubmit = () =>{
    // const aux = historial;
    const newHistorial = historial; // Copia del historial
    if(search != ''){
        newHistorial.unshift(search);
    }
    sethistorial(newHistorial);

    navigation.navigate('ResultScreen', { query: search });
    setsearch('');
  };


  const eliminarIndiceHistorial = (indice) =>{
        const before = historial.slice(0, indice); 
        const after = historial.slice(indice + 1);
        const newHistorial = before.concat(after); 
        sethistorial(newHistorial);
  };


  const clearAllHistorial = () =>{
    sethistorial([]);
  };

  return (
    <SafeAreaView>
      <SearchBar
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        placeholder="Search"
        onChangeText={setsearch}
        value={search}
        onSubmitEditing={handleSearchSubmit}
        returnKeyType="done"
      />

      {/* Historial */}
      {historial.length > 0 ? (
        <View>
          {historial.map((item, index) => (
            // <View key={index}  style={styles.butoonview}>
              <ViewHistorial index={index} hist={item}  eliminarindiceHistorial={eliminarIndiceHistorial} ></ViewHistorial>
            
          ))}
        </View>
      ) : (
        <Text>El historial esta vacio</Text>
      )}

      <View style={styles.view}>
        <Button title="Eliminar todo" onPress={clearAllHistorial} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff', // Fondo blanco del contenedor
    //borderRadius: 25, // Bordes redondeados
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Sombra para dispositivos Android
  },
  inputContainer: {
    backgroundColor: '#f0f0f0', // Fondo del input
    borderRadius: 20, // Bordes redondeados en el input
  },
  inputStyle: {
    fontSize: 16,
    color: '#333', // Color del texto
  },

  
  


  view: {
    //backgroundColor: "#000", // Color de fondo del botón
    //padding: 20, // Relleno interno
    paddingVertical: 20, // Espaciado vertical
    paddingHorizontal: 120, // Espaciado horizontal
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    // Bordes redondeados
    
    //alignItems: 'center',
  }

});




export default SearchScreen;
