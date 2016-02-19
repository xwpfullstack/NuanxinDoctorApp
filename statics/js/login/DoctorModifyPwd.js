'use strict'

import React,{
  View,
  Text,
  Image,
  TouchableOpacity,
  Component,
  TextInput,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native';

class ModifyPwd extends Component {
  constructor(props) {
    super(props);
    this.state={
      addNewPwd: false,
      tel: '',
    }
  }
    
  _returnMainPage() {
    if(!this.state.addNewPwd) {
      this.props.navigator.pop();
    }else {
      this.setState({addNewPwd: false});
    }
  }
  
  _renderHeader() {
    return(
      <View style={styles.toolbar}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {return this._returnMainPage()}}
          >
            <Image 
              source={require('../../images/icon/return.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            找回密码
          </Text>
        </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <Text style={styles.text}>
          使用手机验证码找回
        </Text>
        <View style={styles.telInput}>
          <TextInput
            ref='tel'
            placeholder='请输入手机号码'
            textAlign='center'
            keyboardType='numeric'
            defaultValue={this.state.tel}
            onChangeText={(text) => {this.setState({tel: text})}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {return this._onPressGetVerify()}}         
        >
          <View style={this.state.tel.length == 11 ? styles.verifyBtn : styles.unVerifyBtn}>
            <Text>
              获取短信验证码
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
  },
  toolbar: {
    flexDirection: 'row',
    backgroundColor: '#868181',
    height: 45,
    alignItems: 'center',
  },
  arrow: {
    height: 22,
    marginLeft: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 30,
  },
  telInput: {
    margin: 20,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyBtn: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unVerifyBtn: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ModifyPwd;
