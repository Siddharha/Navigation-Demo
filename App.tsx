
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Inputs from './Pages/Login';

function HomeScreen({navigation}) {
  const [postUser, setPostUser] = React.useState('');
  const [postTPass, setPostPass] = React.useState('');

  return (
    <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {setPostUser}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {setPostPass}
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    navigation.navigate('Details', {
                      itemId: 86,
                      user: postUser,
                      pass:postTPass
                    });
                    //this.login(this.state.email, this.state.password)
                  }
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})


function LoginScreen({navigation}) {
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Home Screen</Text>
  //     <Button
  //       title="Go to Details"
  //       onPress={() => navigation.navigate('Details')}
  //     />
  //   </View>
  // );
  Inputs
}

function DetailsScreen({route, navigation }) {
  const { itemId } = route.params;
  const { user } = route.params;
  const { pass } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>"User: {JSON.stringify(user)} and Pass: {JSON.stringify(pass)}"</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

