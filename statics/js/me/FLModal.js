'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-root-modal'
class FLModal extends Component{
  constructor(){
    super();
};

  handleClickModal(name){
    if (name ==='editMsg') {
        this.props.openCenter();
    }
    else if(name === 'exit'){
           this.props.close();
    }
  };

  render(){
    return  (
          <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.handleClickModal('editMsg')} style={{flex:1}}><View  style={styles.cheack}><Text>编辑资料</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleClickModal('exit')} style={{flex:1}}><View  style={styles.cheack}><Text>退出登录</Text></View></TouchableOpacity>
          </View>
      );
};
};


const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection: 'column',

  },
  cheack:{
    flex:1,
    flexDirection: 'column',
     justifyContent:'center',
      alignItems: 'center',
      borderBottomWidth:1,
  },
});


export default FLModal;
