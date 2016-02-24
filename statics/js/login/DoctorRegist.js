'use strict'

import React,{
  View,
  Text,
  Image,
  ScrollView,
  Picker,
  TextInput,
  Component,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class DoctorRegist extends Component {
  constructor(props) {
    super(props);
    this.state={
        switchInfo: false,
        touchMan: false,
        touchWoman: false,
        info: {},
    }
  }
  
  _returnPage() {
    
  } 

  _renderHeader() {
    return(
      <View style={styles.toolbar}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {return this._returnPage()}}
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
           {this.state.switchInfo == true ? '完善职业信息' : '完善个人信息'}
          </Text>
        </View>
        <View
          style={{flex: 1}}
        >
        </View>
      </View>
    )
  }
  
  /***************************
   *信息名称显示为 *+名字
   **************************/
  _renderTitle(title) {
    return(
      <View
        style={{
          flex: 0.2,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            color: 'red',
          }}
        >
        * 
        <Text
          style={{
            color: 'black',
          }}
        >
          {title}
        </Text>
      </Text>
      </View>
    )
  }
  
  /**************************
   *性别判断
   *************************/
  _onPressManBar() {
    this.setState({
      touchMan: !this.state.touchMan,
      touchWoman: false,
    })
  }

  _onPressWomanBar() {
    this.setState({
      touchWoman: !this.state.touchWoman,
      touchMan: false,
    })
  }

  /*******************************
   *填写完个人信息，点击下一步操作
   ******************************/
  _onPressSubmitPersonInfo() {
    this.setState({
      switchInfo: true,
    })
  }

  /*******************************
   *页面渲染
   ******************************/
  _renderBody() {
    if(!this.state.switchInfo) {
      return(
        <View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 20,
            borderColor: '#E6E6E6',
          }}
        >
          <View
            style={styles.infoRow}
          >
            {this._renderTitle(' 姓        名')}
            <View
              style={{
                flex: 0.8
              }}
            >
              <TextInput
                ref='name'
                placeholder='请输入您的姓名'
                textAlign='start'
                defaultValue={this.state.info.name}
                onChangeText={(text) => {this.setState({info:{name: text}})}}
              />
            </View>
          </View>
          <View
            style={styles.infoRow}
          >
            {this._renderTitle(' 性        别')}
            <View
              style={{
                flex: 0.8,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                onPress={()=>{return this._onPressManBar()}}
              >
                <Text
                  style={this.state.touchMan == true ? styles.redText : styles.normalText}
                >
                  ♂ 男
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{return this._onPressWomanBar()}}
                style={{marginLeft: 20}}
              >
                <Text
                  style={this.state.touchWoman == true ? styles.redText : styles.normalText}
                >
                  ♀ 女
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={styles.infoRow}
          >
            {this._renderTitle(' 年        龄')}
            <View
              style={{
                flex: 0.8,
              }}
            >
              <TextInput
                ref='age'
                placeholder='请输入您的年龄'
                textAlign='start'
                defaultValue={this.state.info.age}
                onChangeText={(text) => {this.setState({info: {age: text}})}}
              />
            </View>
          </View>
          <View
            style={styles.infoRow}
          >
            {this._renderTitle(' 电        话')}
            <View
              style={{
                flex: 0.8,
              }}
            >
              <TextInput
                ref='tel'
                placeholder='手机号码将作为您的登陆账号,并且可以找回密码。'
                textAlign='start'
                defaultValue={this.state.info.tel}
                onChangeText={(text) => {this.setState({info: {tel: text}})}}
              />
            </View>
          </View>
          <View
            style={styles.infoRow}
          >
            {this._renderTitle(' 密        码')}
            <View
              style={{
                flex: 0.8,
              }}
            >
              <TextInput
                ref='passwd'
                placeholder='请输入密码'
                textAlign='start'
                defaultValue={this.state.info.passwd}
                onChangeText={(text) => {this.setState({info: {passwd: text}})}}
              />
            </View>
          </View>
          <View
            style={styles.bottomRow}
          >
            {this._renderTitle(' 确认密码')}
            <View
              style={{
                flex: 0.8
              }}
            >
              <TextInput
                ref='cpasswd'
                placeholder='请再次输入密码'
                textAlign='start'
                defaultValue={this.state.info.cpasswd}
                onChangeText={(text) => {this.setState({info: {cpasswd: text}})}}
              />
            </View>
          </View>
          </View>
          <TouchableOpacity
            onPress={() => {return this._onPressSubmitPersonInfo()}}
          > 
            <View 
              style={styles.submitBtn}
            >
              <Text>
                下一步
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }else {
      return (
        <View>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              marginTop: 20,
              borderColor: '#E6E6E6',
            }}
          >
            <View
              style={styles.infoRow}
            >
              {this._renderTitle(' 医        院')}
              <View
                style={{
                  flex: 0.8
                }}
              >
                <TextInput
                  ref='hospital'
                  placeholder='请输入您所在医院'
                  textAlign='start'
                  defaultValue={this.state.info.hospital}
                  onChangeText={(text) => {this.setState({info:{hospital: text}})}}
                />
              </View>
            </View>
            <View
              style={styles.infoRow}
            >
              {this._renderTitle(' 职        称')}
              <View
                style={{
                  flex: 0.8,
                }}    
              >
                <Picker
                  style={{
                    width: 180,
                  }}
                  selectedValue={this.state.info.title}
                  onValueChange={(value) => {this.setState({info:{title:value}})}}
                >
                  <Picker.Item label="主治医师" value="主治医师" />
                  <Picker.Item label="副主任" value="副主任" />
                  <Picker.Item label="主任" value="主任" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      )
    }
  }
  
  _onPressHandle() {
    this.picker.toggle();
  }

  render() {
    return(
      <ScrollView>
        <View  style={styles.container}>
          {this._renderHeader()}
          {this._renderBody()}
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  infoRow: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6'
  },
  bottomRow: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
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
  redText: {
    color: 'red',
  },
  normalText: {
  
  },
  submitBtn: {
    margin: 20,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
}) 
export default DoctorRegist;
