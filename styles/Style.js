import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginLeft:10,
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      fontWeight: 'bold',
      fontSize: 20,
    }, 
    TouchableOpacity: {
      backgroundColor: 'dodgerblue',
      width: 200,
      height: 40,
      alignItems:'center',
      borderRadius: 3,
    },
    TouchableOpacityText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });

  export default styles;