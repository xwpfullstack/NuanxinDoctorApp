'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-root-modal'
class MenuModal extends Component{
  constructor(){
    super();
};

  handleClickModal(name){
    if (name ==='editMsg') {
        this.props.close();
        this.props.navigator.push({
            name:'doctorMsgEdit',
        });
    }
    /*
     *退出登录
     */
    else if(name === 'exit'){
           this.props.close();
    }
  };

  render(){
      if(this.props.name=== 'menuModal'){
          return  (
                <View style={styles.container}>
                  <TouchableOpacity onPress={()=>this.handleClickModal('editMsg')} style={{flex:1}}><View  style={styles.cheack}><Text>编辑资料</Text></View></TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.handleClickModal('exit')} style={{flex:1}}><View  style={styles.cheack}><Text>退出登录</Text></View></TouchableOpacity>
                </View>
            );
      }
      else if(this.props.name === 'codeModal'){
          return (
              <TouchableOpacity onPress={()=>this.handleClickModal('exit')}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                      <Image source={require('../../images/me/erweima.png')} style={{flex:1,width:200, height:200, margin:20,alignItems:'center',top:200,}} />
                      <View style={{paddingBottom:30}}><Text>扫一扫二维码关注{this.props.dcrname}医生</Text></View>
                  </View>
              </TouchableOpacity>
          );
      }

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


export default MenuModal;
