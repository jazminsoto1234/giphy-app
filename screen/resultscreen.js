import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListResultGifs from '../components/Listresultgifs'

function ResultScreen({ route }){
  const navigation = useNavigation();
  const { query } = route.params;  

  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity style={styles.touchable}  onPress={()=> navigation.goBack()}>
        <TextInput
          style={styles.textinput}
          placeholder="Search"
          value={query}
          editable={false}
        />
      </TouchableOpacity>

      {/* Mostrar resultados */}
      <Text>Resultados de busqueda: "{query}"</Text>

      {/* Componente de resultados */}
      
      <ListResultGifs word={query} />
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


export default ResultScreen;
