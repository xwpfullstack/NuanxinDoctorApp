'use strict'

import React, {
  Alert,
  Component,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import NewsList from './NewsList';

const newsSet = [
  {date: '2016年02月10日',subject: '门诊停诊通知', content: '本周因到外地参加学术讨论会，停止门诊一周，请谅解。'},
  {date: '2016年02月03日',subject: '门诊停诊通知', content: '本周因家中，停止门诊，请谅解。'},
  {date: '2016年02月01日',subject: '门诊降价通知', content: '门诊费用下调，请知悉。'},
  {date: '2016年01月28日',subject: '门诊停诊通知', content: '本周停止门诊一周，请谅解。'},
  {date: '2016年01月20日',subject: '门诊停诊通知', content: '停止门诊一周。'},
  {date: '2016年01月10日',subject: '门诊价格调整', content: '本周门诊价格上涨，请知悉。'},
  {date: '2016年01月01日',subject: '元旦快乐', content: '祝大家元旦快乐。'},
];
class Release extends Component {
  constructor(props) {
    super(props);
    this.state={
      subject: '',
      content: '',
    }
  }

  cancelRelease() {
    this.setState({content: '', subject: ''})

  }

  releaseNews() {
    if (this.state.subject === '') {
      Alert.alert('提醒', '请输入主题。');
      return;
    }
    if (this.state.content === '') {
      Alert.alert('提醒', '请输入内容。');
      return;
    }
    Alert.alert(this.state.subject,this.state.content);
  }

  render() {
    return (
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.cancelRelease()}>
            <Text style={styles.cmdText}>取消</Text>
          </TouchableHighlight>
          <Text style={styles.titleText}>发布消息</Text>
          <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.releaseNews()}>
            <Text style={styles.cmdText}>发布</Text>
          </TouchableHighlight>
        </View>
        <View style = {styles.container}>
          <TextInput
            ref = 'contentBox'
            placeholder = {'你想说的...'}
            onChangeText = {(text) => this.setState({content: text})}
            autoFocus = {true}
            textAlignVertical = {'top'}
            multiline = {true}
            numberOfLines = {6}
            style = {styles.contentBox}
            value = {this.state.content}
          />
          <TextInput
            placeholder = {'主题...'}
            onChangeText = {(text) => this.setState({subject: text})}
            style = {styles.subjectBox}
            value = {this.state.subject}
          />

          <View style={styles.releaseTo}>
           <Text style={styles.releaseToText}>所有患者 》</Text>
          </View>

          <NewsList navigator={this.props.navigator} newsSet = {newsSet}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
	backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
	},
  title: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#868181',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
  },
  titleText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FFFFFF',
  },
  cmdText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
		backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 11,
  },
  contentBox: {
    backgroundColor: '#FFFFFF',
    height: 180,
  },
  subjectBox: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 4,
  },
  releaseTo: {
    backgroundColor: '#F08300',
    height: 40,
    padding: 11,
    justifyContent: 'center',
  },
  releaseToText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    color: '#FFFFFF',

  },
});

export default Release;
