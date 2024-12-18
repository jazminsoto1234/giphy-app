import { Button, Text, View, StyleSheet } from "react-native";


function ViewHistorial({index,hist, eliminarindiceHistorial}){
    return (
        <View key={index} style={styles.butoonview}>
            {/* Cambiar ese text por un touch interactivo */}
            <Text style={styles.text}  key={index}>
                {hist}
            </Text>
            <Button onPress={()=> eliminarindiceHistorial(index)} title="X"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    butoonview: {
        flexDirection:'row',          // Alinea los elementos en una fila
        justifyContent: 'space-between', // Espacia los elementos para que estén a los extremos
        alignItems: 'center',          // Alinea verticalmente los elementos al centro
        padding: 10,                   // Espaciado alrededor de la vista
        marginBottom: 10,              // Espacio entre las filas
        backgroundColor: '#f9f9f9',    // Fondo opcional
        borderRadius: 5,               // Bordes redondeados opcionales
      },


    text: {
        fontSize: 16,                  // Tamaño del texto
        color: '#333',                 // Color del texto
    },
});

export default ViewHistorial;