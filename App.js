import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react';

export default class App extends Component {

    state = {
      email: '',
      password: '',
    };
  
    


  
  onLogin() {
    const {  password,Confirmation,nom,prenom ,Rib} = this.state;

    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.Text}><strong>Welcome to BankinApp</strong> </Text>
      <br></br>
      <br></br>
      <Text style={styles.Text}><strong>Créer votre compte</strong></Text>
      <br></br>
      

		

      <TextInput 
         
         value={this.state.Nom}
         keyboardType = 'Nom'
         onChangeText={(Nom) => this.setState({ Nom })}
         
        
           placeholder='Nom '
         placeholderTextColor = 'white'
         style={styles.input}
       />




<TextInput 
         
         value={this.state.Prenom}
         keyboardType = 'Prenom'
         onChangeText={(Prenom) => this.setState({ Prenom })}
         
        
           placeholder='Prenom '
         placeholderTextColor = 'white'
         style={styles.input}
       />

        

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />



<TextInput
          value={this.state.Confirmation}
          onChangeText={(Confirmation) => this.setState({ Confirmation })}
          placeholder={'Confirmation mdp'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />


        <TextInput
          value={this.state.Rib}
          onChangeText={(Rib) => this.setState({ Rib })}
          placeholder={'RIB'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
     
        

        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Sign Up / Login </Text>
       </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#abe188',
  },

  
  titleText:{
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F78E69',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },

  
  
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
