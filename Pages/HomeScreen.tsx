import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles/HomeScreenStyle';
import React from 'react';
//import Inputs from './Pages/Login';
export function HomeScreen({ navigation }) {
  const [postUser, setPostUser] = React.useState('');
  const [postTPass, setPostPass] = React.useState('');
  return (<View style={styles.container}>
    <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Email" placeholderTextColor="#9a73ef" autoCapitalize="none" onChangeText={setPostUser} />

    <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Password" placeholderTextColor="#9a73ef" autoCapitalize="none" onChangeText={setPostPass} />

    <TouchableOpacity style={styles.submitButton} onPress={() => {
      navigation.navigate('Details', {
        itemId: 86,
        user: postUser,
        pass: postTPass
      });
      //this.login(this.state.email, this.state.password)
    }}>
      <Text style={styles.submitButtonText}> Submit </Text>
    </TouchableOpacity>
  </View>);
}

