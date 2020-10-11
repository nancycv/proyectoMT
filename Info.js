 // This is an Example to Send WhatsApp Message from React Native App
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: '',
       telefono: '7226125489',
     emails:'nancy10714@gmail.com'
    };
  }





  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.instructions}> C O N T Á C T A N O S</Text>
     
       <Text style={styles.instructionsa}> Dale click al botón y envianos un WhatsApp, Correo ó llamanos!</Text>
       
        

  <Text>{"\n"}</Text>

 <Text style={styles.instructionsa}>Teléfono</Text>
       <TextInput
         value={this.state.telefono}
         onChangeText={(telefono) => this.setState({ telefono })}
         style={styles.instructionsa}
       />
      <Text>{"\n"}</Text>
       <Text style={styles.instructionsa}>E-mail</Text>
       <TextInput
         value={this.state.emails}
         onChangeText={(emails) => this.setState({  emails  })}
         style={styles.instructionsa}
    
       />
<Text>{"\n"}</Text>
      <Text
          style={{marginTop:10,backgroundColor: '#CABFD4', color: 'white', fontSize:18}}
          onPress={() => {
            Linking.openURL(
             'http://api.whatsapp.com/send?phone=+5217226125489' + this.state.mobile_no
            );
          }}>
         
          * WhatsApp *

        </Text>
          <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.phonecall(this.state.telefono, true)}>
            <Text style={styles.text}>
              Llamar al sitio
            </Text>
        </TouchableOpacity>
 
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.email(this.state.emails.split(',') ,null,null,'INFO COCKTAIL','Hola, me interesa saber más de los cocteles!')}>
            <Text style={styles.text}>
              Enviar e-mail
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:0,
    paddingTop: 30,
    backgroundColor: '#F5F1F1',
  },
  instructions: {
    
    marginHorizontal: 5,
     marginTop: 0,
   marginBottom: 19,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 22,
     //  fontStyle:'italic',
       fontWeight: 'bold',

       
    
  },
   instructionsa: {
    
    marginHorizontal: 5,
     marginTop: 10,
        marginBottom: 0,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 18,
       fontStyle:'italic',
       
    
  },  
 
  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor: '#CABFD4',
    marginTop : 20,
  },
  text: {
    fontSize: 18,
    textAlign : 'center',
    padding : 10,
    color : '#ffffff',
  },
 
  
});
