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

class ModifyPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.passProps.prescriptionData,
    }
  }

  popOut() {
    this.props.navigator.pop();
  }
  submit() {
    this.props.passProps.modifyData(this.props.passProps.date, this.state.data.medcine, this.state.data);
    this.props.navigator.pop();
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
            <Text style={styles.titleNameText}>修改处方</Text>
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>药名</Text>
          <View style = {[styles.inputStyle, {borderColor: 'transparent'}]}>
            <Text>{this.state.data.medcine}</Text>
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用周期</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => {this.state.data.period = text; this.setState({data: this.state.data})}}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
              defaultValue = {this.state.data.period}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用剂量</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => {this.state.data.amount = text; this.setState({data: this.state.data})}}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
              defaultValue = {this.state.data.amount}
            />
          </View>
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
  label: {
    flex: 1,
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
    color: '#666666',

  },
  inputStyle: {
    flex: 3,
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
});

export default ModifyPrescription;
