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
import DoctorPhoto from '../../js/login/DoctorPhoto';

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

    //选择弹出哪个对话框
    ChooseModal() {
        switch (this.props.name) {
            case 'menuModal':
                return this.MenuModal();
                break;
            case 'codeModal':
                return this.CodeModal();
                break;
            case 'changePhoto':
                return this.PhotoModal();
                break;
        }
    }

    //编辑资料modal
    MenuModal(){
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

    //二维码Modal
    CodeModal() {
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

    //修改头像Modal
    PhotoModal() {
        return (
            <View style={{height:300,width:300,top:WINDOW_HEIGHT*0.5-100,backgroundColor:'#FFF'}}>
                <DoctorPhoto />
            </View>
        );
    }

  render(){
      return(
          this.ChooseModal()
      )
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
