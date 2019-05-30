import React from 'react';
import { Button, View, Text } from 'react-native';



export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
  <Button title="Go to Details screen"
    onPress={() => this.props.navigation.navigate('Details')}
   />
  </View>
);
}
}
