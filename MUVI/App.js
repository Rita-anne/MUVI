import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{display:'flex', flexDirection:'row'}} >
          <Text style={{color:'white', fontSize:90, backgroundColor:'#e6b800', color:'black', borderRadius:10, paddingRight:25,paddingLeft:25,paddingTop:0,paddingBottom:0}} >M</Text>
      <Text style={{color:'white', fontSize:80}}>Movi</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
