'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

class AddDiagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagnosis: '',
    }
  }

  popOut() {
      this.props.navigator.pop();
  }

  submit() {
    Alert.alert('prompt', this.state.diagnosis);
  }

  render() {
    return (
      <View>
        <View style={styles.tittle}>
          <View style={styles.titleContent}>
          <TouchableOpacity style={{width:50}} onPress={()=>this.popOut()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
            <Text style={styles.name}>添加诊断</Text>
            <View style={{width:50}}></View>
          </View>
        </View>
        <View style = {styles.inputStyle}>
          <TextInput
          style = {styles.searchInput}
            placeholder = {'请输入医生诊断.....'}
            onChangeText = {(text) => this.setState({diagnosis: text})}
            underlineColorAndroid = {'transparent'}
            selectTextOnFocus = {true}
          />
        </View>
        <TouchableHighlight
          underlayColor='rgba(34,26,38,0.1)'
          onPress={()=>this.submit()}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>提交</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tittle:{
    backgroundColor:'#878181',
    flexDirection: 'column',
    height:40,
    justifyContent: 'center',
  },
  titleContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:10,
    marginRight:10,
  },
  name:{
    color:'white',
     fontSize:18,
  },
  inputStyle: {
    height: 40,
    justifyContent: 'center',
    borderColor: '#333333',
    borderRadius: 4,
    borderWidth: 1,
    margin: 30,
  },
  subjectBox: {
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
  },
	searchInput: {
		fontSize: 18,
	},
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: 30,
    width: 80,
    borderWidth: 0.4,
    borderColor: '#FEA501',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginRight: 25,
  },
  buttonText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FEA501',
  },
});

export default AddDiagnosis;
