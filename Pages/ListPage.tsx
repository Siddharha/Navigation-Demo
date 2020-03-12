import React from 'react';
import { View,ListView,Text, FlatList } from 'react-native';
import { styles } from './styles/HomeScreenStyle';
export default class ListPage extends React.Component{
 
  state = {
    data: '',
    listData: []
 }
 componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({
          data: responseJson,
          listData: [{'name':'Sid'},{'name':'Sam'},{'name':'Cat'},{'name':'Dog'},{'name':'Forest'},{'name':'Park'}]
       })
    })
    .catch((error) => {
       console.error(error);
    });
 }
 render() {
    return (
       <View>
          <Text>
             {this.state.data.body}
          </Text>

          <FlatList
          data={this.state.listData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
          
          </View>
          }
          keyExtractor={item => item.email}
        />
       </View>
    )
 }
}

