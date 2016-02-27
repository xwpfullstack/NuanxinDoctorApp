'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

class AddMedcine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productor: '',
      specification: '',
      unit: '',
      amount: '',
      meathod: '',
    }
  }

  popOut() {

  }

  submit() {
    let postData = {name: this.state.name,
      productor: this.state.productor,
      specification: this.state.specification,
      unit: this.state.unit,
      amount: this.state.amount,
      meathod: this.state.meathod
    }
  }

  update() {

  }
  render() {
    return (
      <View>
        <View style={styles.title}>
          <View style={styles.titleReturn}>
            <TouchableHighlight
              underlayColor='rgba(34,26,38,0.1)'
              onPress={()=>this.popOut()}>
              <Text style={styles.titleReturnText}>《 返回</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.titleName}>
            <Text style={styles.titleNameText}>添加药物</Text>
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>请选择医生诊断</Text>
          <View style = {[styles.inputStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style = {{paddingLeft: 11, justifyContent: 'center'}}>
              <Text style = {{alignSelf: 'center', fontSize: 12, color: '#666666',}}>0 items</Text>
            </View>
            <TouchableHighlight
              style = {styles.chooseButton}
              underlayColor='rgba(34,26,38,0.1)'
              onPress={()=>this.popOut()}>
              <Text style={styles.titleReturnText}>···</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>名称</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({productor: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>厂家</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({productor: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用单位</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({unit: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用剂量</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({amount: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用方法</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({meathod: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>说明书</Text>
          <View style = {[styles.inputStyle, {height: 120}]}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({specification: text})}
              selectTextOnFocus = {true}
              multiline = {true}
              numberOfLines = {6}
              textAlignVertical = {'top'}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {[styles.inputLine, {justifyContent: 'flex-start'}]}>
          <TouchableHighlight
            underlayColor='rgba(34,26,38,0.1)'
            onPress={()=>this.chooseFile()}
            style={styles.filebuttonStyle}
          >
            <Text style={styles.filebuttonText}>选择文件</Text>
          </TouchableHighlight>
          <Text>未选择文件</Text>
        </View>
        <TouchableHighlight
          underlayColor='rgba(34,26,38,0.1)'
          onPress={()=>this.update()}
          style={[styles.buttonStyle, {alignSelf: 'flex-start', marginLeft: 11,}]}
        >
          <Text style={styles.buttonText}>上传</Text>
        </TouchableHighlight>

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
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#868181',
    height: 45,
    padding: 11,
  },
  titleReturn: {
    flex: 3,
  },
  titleReturnText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    color: '#FFFFFF',
  },
  titleName: {
    flex: 4
  },
  titleNameText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FFFFFF',
  },
  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    paddingVertical: 4,
  },
  chooseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#333333',
    backgroundColor: '#666666',
    width: 30,
  },
  label: {
    flex: 2,
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
    color: '#666666',

  },
  inputStyle: {
    flex: 4,
    height: 30,
    justifyContent: 'center',
    borderColor: '#333333',
    borderRadius: 4,
    borderWidth: 1,
  },
	searchInput: {
		fontSize: 12,
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
    marginTop: 11,
    marginRight: 11,
  },
  buttonText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FEA501',
  },
  filebuttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginRight: 6,
    height: 20,
    width: 80,
    borderWidth: 0.4,
    borderRadius: 10,
  },
  filebuttonText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
    color: '#333333',
  },
});

export default AddMedcine;
