'use strict'

import React, {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Component,
  StyleSheet,

} from 'react-native';

class OrderDetails extends Component{
  constructor(props) {
    super(props);
  }
  popOut() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tittle}>
          <View style={styles.titleContent}>
          <TouchableOpacity style={{width:50}} onPress={()=>this.popOut()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
            <Text style={styles.name}>订单详情</Text>
            <View style={{width:50}}></View>
          </View>
        </View>
        <View style={styles.head}>
          <Text style={styles.headText}>{this.props.orderData.date}    {this.props.orderData.name}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.normalText}>订单编号： 201501261000001</Text>
          <Text style={styles.normalText}>提交订单时间： {this.props.orderData.date}</Text>
          <Text style={styles.normalText}>咨询内容：</Text>
          <Text style={styles.normalText}>1. 已服用2小时药物是否可以减量？</Text>
          <Text style={styles.normalText}>2. 服用安眠药物是否可以开车？</Text>
          <Text style={styles.normalText}>3. 服用此药物时是否可与同类药物一起服用？</Text>

          <View style={styles.hr}>
          </View>

          <Text style={styles.strongText}>订单状态</Text>
          <Text style={styles.normalText}>{this.props.orderData.state}</Text>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
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
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 11,
    margin: 4,
    marginBottom: 2,
  },
  headText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    color: '#333333',
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 11,
    margin: 4,
    marginTop: 0,

  },
  normalText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 8,
    lineHeight: 16,
    color: '#999999',
  },
  strongText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 10,
    lineHeight: 20,
    color: '#333333',
  },
  hr: {
    borderBottomWidth:1,
    borderColor: '#CCCCCC',
    height: 1,
    marginTop:6,
    marginBottom: 6,
  }
});
export default OrderDetails;
