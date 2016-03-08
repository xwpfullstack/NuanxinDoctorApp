'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-root-modal';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

class MenuModal extends Component{
  constructor(){
    super();
  };
  handleClickModal(name){
      let menuname;
      switch (name) {
          case 'editMsg':
            menuname='doctorMsgEdit';
            break;
           case 'exit':
            menuname='logout';
            break;
      }
        this.props.close();
        this.props.navigator.push({
            name:menuname,
            dctmsg:this.props.dctmsg,
        });
    };
  render(){
      if(this.props.name === 'menuModal'){
          return  (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.handleClickModal('editMsg')}
                        style={{flex:1}}>
                        <View  style={styles.cheack}>
                            <Text style={{color:'#fff'}}>编辑资料</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.handleClickModal('exit')}
                        style={{flex:1}}>
                        <View  style={styles.cheack}>
                            <Text style={{color:'#fff'}}>退出登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
      }
      else if(this.props.name === 'codeModal'){
          return (
              <TouchableOpacity
                  onPress={()=>this.props.close()}
                  style={styles.container}>
                  <View>
                      <Image
                          source={require('../../images/me/erweima.png')}
                          style={styles.codeImg} />
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
  codeBox: {
    flex:1,
  },
  codeImg:{
     height:200,
     width:200,
     top:WINDOW_HEIGHT*0.5 - 100,
     left:WINDOW_WIDTH*0.5 - 100,
  },
  cheack:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor:'rgba(255,255,255,1)',
  },
});


export default MenuModal;
