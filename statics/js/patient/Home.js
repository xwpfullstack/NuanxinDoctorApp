'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MainList from './MainList';
import Head from './Head';
const {_width,_height}=Dimensions.get('window');

class Hometwo extends Component{
  constructor(){
    super();
    };
    render(){
      return <Image
        source={require('../../images/load/background.png')}
        style={styles.background}
      >
      <View style={styles.topTitle}>
      <Text style={[styles.textColor,styles.topText]}> 病人</Text>
      </View>

      <Head />

      <View
        style={styles.container}
      >
      <MainList />
      </View>
      </Image>
    }
  };

const styles = StyleSheet.create({
container:{
  backgroundColor: 'rgba(255,255,255,0.102)',
    flexDirection: 'row',
    flex: 1,
},
  background:{
    width:_width,
    height:_height,
    flex:1,
  },
    topTitle:{
     backgroundColor: '#868181',
     height:45,
     justifyContent:'center',
  },
  topText:{
    textAlign:'center',
    fontSize:18,
  },
    textColor:{
    color:'#ffffff',
  },
});

  export default Hometwo;
