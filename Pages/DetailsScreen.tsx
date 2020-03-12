import React from 'react';
import { View, Text, Button } from 'react-native';
export function DetailsScreen({ route, navigation }) {
  
  const { itemId } = route.params;
  const { user } = route.params;
  const { pass } = route.params;

  
  return (
    
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>"User: {JSON.stringify(user)} and Pass: {JSON.stringify(pass)}"</Text>
  
    <Button title="Go to Home... again" onPress={() => navigation.navigate('Home')} />
    <Button title="List Demo" onPress={() => {
      navigation.navigate('ListPage')}} />
  </View>);
}
