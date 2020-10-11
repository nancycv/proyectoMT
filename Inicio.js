import React, {Component} from 'react';
import { Text, View, Image, StyleSheet,TextInput, Button} from 'react-native';

export default class Inicio extends Component {


  constructor(props){
    super(props);
    
  }
  

  render(){
  
    return(
        <View style={{flex: 1,backgroundColor: '#F5F1F1'}}>


        <Text style={styles.instructionss}> -B E A C H -E   C O C K T A I L-</Text>

        <Image source={{ uri: "https://yourmarketingbff.com/wp-content/uploads/2018/05/Refreshing-Blackberry-Cocktail-Mocktail-Recipe-1.jpg" }} style={{ width: 208, height: 115,
   marginRight:115, }} />
        
        <Text style={styles.instructionse}> Expertos en cocteles, ofrecemos tragos clásicos y de nuestra autoría al igual que la mejor selección de cerveza.</Text>

        <Text style={styles.instructionsss}>- M      E      N     U -{"\n"}  * Mojitos. {"\n"}  * Gin Tonic.{"\n"}  * Margaritas.{"\n"}  * Cosmopolitan.</Text>
      
        <Image source={{ uri: "https://i.pinimg.com/564x/08/60/d8/0860d8be82db69f826b461c1b59ec981.jpg" }} style={{ width: 203, height: 111,
   marginLeft:119,marginBottom: 0, }} />
    <Text style={styles.instructions}> Ven y conoce nuestra gran variedad de cocteles!</Text>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  
   instructionss: {
    
    marginHorizontal: 5,
     marginTop: 35,
   marginBottom: 27,
     textAlign: 'center',
       color: '#82768D',
       backgroundColor: "transparent",
       fontSize: 22,
       fontWeight: 'bold',
    
  }, 
   instructions: {
    
    marginHorizontal: 5,
     marginTop: 18,
   marginBottom: 0,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 17,
       fontStyle:'italic',
       
    
  }, 
  instructionsss: {
    
    marginHorizontal: 0,
     marginTop: 28,
   marginBottom: 15,
   marginRight:139,
     textAlign: 'center',
       color: '#9F99A5',
       backgroundColor: "transparent",
       fontSize: 15.5,
      fontStyle:'italic',
    
  }, 
    instructionse: {
    
    marginHorizontal: 5,
     marginTop: 25,
   marginBottom: 0,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 17,
      // fontStyle:'italic',
       
    
  }, 
});
  