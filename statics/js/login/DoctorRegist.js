'use strice'

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

import DoctorPhoto from './DoctorPhoto';

class DoctorRegist extends Component {
  constructor(props) {
    super(props);
    var tableArray = new Array();
    for(var i = 0 ; i < 7 ;i ++) {
      tableArray[i] = new Array();
      for(var j = 0; j < 3 ; j++) {
        var val = 0;
        if (j == 0) {
          val = 1;
        }else if(j == 1) {
          val = 2;
        }else {
          val = 4;
        }
        tableArray[i][j] = {check: false,value: val}
      }
    }
    this.state={
        switchInfo: false,
        lastpage:false,
        touchMan: false,
        touchWoman: false,
        errorMsg: false,
        info: {
          name: '',
          tel: '',
          sex: '',
          age: '',
          passwd: '',
          cpasswd: '',
          hospital: '',
          price: '',
          title: '',
          depart: '',
          price: '',
        },
        tableState:tableArray,
    }
  }
  
  _returnPage() {
    if(!this.state.switchInfo) {
      this.props.navigator.pop();
    }else if(this.state.switchInfo && !this.state.lastpage) {
      this.setState({
        switchInfo: false,
      })
    }else if(this.state.switchInfo && this.state.lastpage) {
      this.setState({
        lastpage: false,
      })
    } 
  } 

  _renderHeader() {
    return(
      <View style={styles.toolbar}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {return this._returnPage()}}
          >
            <View style={{flex: 1}}>
              <Image
                source={require('../../images/icon/back.png')}
                style={styles.arrow}
              />
            </View>
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
           {this.state.switchInfo ? (this.state.lastpage ? '设置您的头像' : '完善职业信息') : '完善个人信息'}
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
          flex: 0.4,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            color: 'red',
            fontSize: 18,
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
    var data = this.state.info;
    if(data['name'].length > 0 && data['age'].length > 0 && data['tel'].length > 0 && data['passwd'].length > 0 && data['cpasswd'].length > 0){
      if(data['passwd'] != data['cpasswd']) {
        this.setState({
          errorMsg: true,
        }) 
      }else {
        this.setState({
          switchInfo: true,
          errorMsg: false,
        })
      }
    }else{
      this.setState({
        errorMsg: true,
      })
    }
  }

  /******************************
   *渲染错误信息
   *****************************/
  _renderErrorMsg(msg) {
    var data = this.state.info;
    if(this.state.errorMsg) {
      return (
        <View
          style={{
            marginTop: 5,
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              color: 'red',
            }}
          >
            {this.state.info.passwd != this.state.info.cpasswd ? '*两次输入的密码不一致，请重新输入' : (
              data['name'].length > 0 && data['age'].length > 0 && data['tel'].length > 0 && data['passwd'].length > 0 && data['cpasswd'].length > 0 ? '' : msg
              )}
          </Text>
        </View>
      )
    }else {
      return (
        <View>
        </View>
      )
    }
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
                flex: 0.8,
              }}
            >
              <TextInput
                ref='name'
                style={styles.input}
                placeholder='请输入您的姓名'
                textAlign='start'
                underlineColorAndroid={'transparent'}
                defaultValue={this.state.info['name']}
                onChangeText={(text) => {
                  var data = this.state.info;
                  data['name'] = text;
                  this.setState({info: data})}}
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
                marginLeft: 15,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                onPress={()=>{return this._onPressManBar()}}
              >
                <View>
                  <Text
                    style={this.state.touchMan == true ? styles.redText : styles.normalText}
                  >
                    ♂ 男
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{return this._onPressWomanBar()}}
                style={{marginLeft: 20}}
              >
                <View>
                  <Text
                    style={this.state.touchWoman == true ? styles.redText : styles.normalText}
                  >
                    ♀ 女
                  </Text>
                </View>
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
                style={styles.input}
                placeholder='请输入您的年龄'
                textAlign='start'
                keyboardType='numeric'
                underlineColorAndroid={'transparent'}
                defaultValue={this.state.info.age}
                onChangeText={(text) => {
                  var data = this.state.info;
                  data['age'] = text;
                  this.setState({info: data})}}
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
                style={styles.input}
                placeholder='将作为您的登陆账号'
                textAlign='start'
                keyboardType='numeric'
                maxLength={11}
                underlineColorAndroid={'transparent'}
                defaultValue={this.state.info.tel}
                onChangeText={(text) => {
                  var data = this.state.info;
                  data['tel'] = text;
                  this.setState({info: data})}}
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
                style={styles.input}
                placeholder='请输入密码'
                textAlign='start'
                underlineColorAndroid={'transparent'}
                defaultValue={this.state.info.passwd}
                onChangeText={(text) => {
                  var data = this.state.info;
                  data['passwd'] = text;
                  this.setState({info: data})}}
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
                style={styles.input}
                placeholder='请再次输入密码'
                textAlign='start'
                underlineColorAndroid={'transparent'}
                defaultValue={this.state.info.cpasswd}
                onChangeText={(text) => {
                  var data = this.state.info;
                  data['cpasswd'] = text;
                  this.setState({info: data})}}
              />
            </View>
          </View>
          </View>
          {this._renderErrorMsg('以上内容都为必填项，请您补充空项。')}
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
    }else if(this.state.switchInfo && !this.state.lastpage) {
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
                  style={styles.input}
                  placeholder='请输入您所在医院'
                  underlineColorAndroid={'transparent'}
                  defaultValue={this.state.info.hospital}
                  onChangeText={(text) => {
                    var data = this.state.info;
                    data['hospital'] = text;
                    this.setState({info: data})}}
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
                  onValueChange={(value) => {
                    var data = this.state.info;
                    data['title'] = value;
                    this.setState({info:data})}}
                >
                  <Picker.Item label="主治医师" value="主治医师" />
                  <Picker.Item label="副主任" value="副主任" />
                  <Picker.Item label="主任" value="主任" />
                </Picker>
              </View>
            </View>
            <View
              style={styles.infoRow}
            >
              {this._renderTitle(' 科        室')}
              <View
                style={{
                  flex: 0.8,
                }}    
              >
                <Picker
                  style={{
                    width: 180,
                  }}
                  selectedValue={this.state.info.depart}
                  onValueChange={(value) => {
                    var data = this.state.info;
                    data['depart'] = value;
                    this.setState({info:data})}}
                >
                  <Picker.Item label="神经内科" value="神经内科" />
                  <Picker.Item label="内科" value="内科" />
                </Picker>
              </View>
            </View>
            <View
              style={styles.infoRow}
            >
              {this._renderTitle(' 咨询价格')}
              <View
                style={{
                  flex: 0.8,
                }}    
              >
                <TextInput
                  ref='price'
                  style={styles.input}
                  keyboardType='numeric'
                  placeholder='请输入10分钟咨询价格'
                  underlineColorAndroid={'transparent'}
                  defaultValue={this.state.info.price}
                  onChangeText={(text) => {
                    var data = this.state.info;
                    data['price'] = text;
                    this.setState({info:data})}}
                />
              </View>
            </View>
            {this._renderTable()}
          </View>
          <TouchableOpacity
            onPress={() => {return this._onPressLastInfopage()}}
          > 
            <View 
              style={styles.submitBtn}
            >
              <Text>
                点击跳转到最后一步
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }else if(this.state.switchInfo && this.state.lastpage) {
      return (
        <DoctorPhoto />
      )
    }
  }

  _onPressLastInfopage() {
    this.setState({
      lastpage: true,
    })
  }

   _renderTable() {
    return(
      <View 
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 18,
            }}
          >
            请选择出诊时间
          </Text>
        </View>
        <View style={styles.tabRow}>
          <View style={styles.table}>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期一
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期二
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期三
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期四
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期五
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期六
            </Text>
          </View>
          <View style={[styles.table,{borderLeftWidth: 0}]}>
            <Text>
              星期日
            </Text>
          </View>
        </View>
        <View style={styles.tabRow}>
          {this._renderTableRow(0)}
        </View>
        <View style={styles.tabRow}>
          {this._renderTableRow(1)}
        </View>
        <View style={styles.tabRow}>
          {this._renderTableRow(2)}
        </View>
      </View>
    )
  }
    
  _onPressTable(row,column) {
    var data = this.state.tableState;
    data[column][row]['check'] = !data[column][row]['check'];
    this.setState({
      tableState: data,
    })
  }

  /********************************
   *渲染出诊时间表格
   *******************************/
  _renderTableRow(row) {
    var time = '';
    if(row == 0) {
      time = '上午';
    }else if (row == 1) {
      time = '下午';
    }else if(row == 2) {
      time = '晚上';
    }
    
    var rowsData = [];
    var tableArray = [0,1,2,3,4,5,6,7];
    tableArray.map((value) => {
      var data = null;
      if(value == 0) {
        data = (
          <View 
            style={[styles.table,{borderTopWidth: 0}]}
            key={'table'+row+value}
          >
            <Text>
              {time}
            </Text>
          </View>
        )
      }else {
        var num = value - 1;
        data = (
          <TouchableOpacity
            key={'table'+row+value}
            onPress={() => this._onPressTable(row,value-1)}
            style={[styles.table,{borderTopWidth: 0,borderLeftWidth: 0,backgroundColor: this.state.tableState[num][row]['check']? 'orange' : 'transparent'}]}
          >
          </TouchableOpacity>
        )
      }
      rowsData.push(data);
    })
    return rowsData;
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
    height: 50,
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
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  tabRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#E6E6E6'
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
    fontSize: 18,
  },
  input: {
    fontSize: 18,
  },
  normalText: {
    fontSize: 18,
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

