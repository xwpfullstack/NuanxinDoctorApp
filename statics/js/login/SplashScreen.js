'use strict'

import React,{
  View,
  Text,
  Image,
  StyleSheet,
  Component,
  Dimensions,
} from 'react-native';

const {height,width} = Dimensions.get('window');

class SplashScreen extends Component { 
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../../images/load/load_page.png')} style={styles.loadPage}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  loadPage: {
    width: width,
    height: height,
  }
})

export default SplashScreen;
