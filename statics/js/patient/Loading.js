'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native';

class Loading extends Component{
  constructor(){
    super();
 };

  render(){
          return (
                  <View style={[
                              {height:Dimensions.get('window').height, 
                              width:Dimensions.get('window').width,
                              flexDirection: 'column',alignItems: 'center',justifyContent: 'center',},this.props.style]}>
                          <ProgressBarAndroid />
                          <Text style={{color:'#F08300',fontSize:16,}}>加载中.....</Text>
                  </View>
            );
    };

};
const styles = StyleSheet.create({

});

  export default Loading;
