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
  constructor(props){
    super(props);
    this.state={
        codeImg:'',
    }
    this.postCodeData();
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

    _loadCodeImg() {
        if(this.state.codeImg === ''){
            return(
                <View>
                    <Text>loading</Text>
                </View>
            )
        }
        else {
            return(
                <Image
                    source={{uri:this.state.codeImg}}
                    style={styles.codeImg} />
            )
        }
    }

    postCodeData(){
        fetch(DoctorQrcode_URL,{
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   id:this.props.doctorId,
                })
          })
          .then((response) => {
               return response.json();
          })
          .then((responseData)=>{
            console.log(this.props.doctor_id);
            console.log(responseData);
        this.setState({
            codeImg:responseData.qrcodeUrl
        })
          })
          .catch((err)=>{
              this.setState({isSuccess:false,isLoad:true});
              console.log(err.toString());
          })
          .done();
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
                    {this._loadCodeImg()}
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
