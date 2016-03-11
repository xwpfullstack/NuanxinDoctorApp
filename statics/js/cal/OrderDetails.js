'use strict'

import React, {
  Alert,
  Dimensions,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Component,
  StyleSheet,
  ScrollView,

} from 'react-native';

class OrderDetails extends Component{
  constructor(props) {
    super(props);
    this.state={
      data:[],
      isLoad:false,
      isSuccess:true,
    };
    // Alert.alert('',this.props.orderData);
  }
  componentDidMount(){
    this.postData();
    //  Alert.alert(this.state.data+'');
  }
  postData(){
    Alert.alert('',this.props.orderData+'');
    this.setState({isLoad:false});
      // Alert.alert('fetch');
      fetch(OrderDetail_URL,{
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 sn:this.props.orderData
              })
        })
        .then((response) => {
            // Alert.alert('', 'response');
             return response.json();
        })
        .then((responseData)=>{
          // console.log(responseData);

            Alert.alert('',JSON.stringify(responseData));
          this.setState({isLoad:true, data:responseData.patients,isSuccess:true,})
          this.BaseCreateData(this.state.data,'date');
                    // Alert.alert('',this.state.data[0].date);
        })
        .catch((err)=>{
            // Alert.alert('catch ',err.toString())
            this.setState({isSuccess:false,isLoad:true});
            // console.log(err.toString());
        })
        .done();
  };
  popOut() {
    this.props.navigator.pop();
  }
  handlePatient() {

  }
  deleteOrder() {

  }
  render() {
    let waiting = require('../../images/schedule/appointing_icon.png');
    let appointing = this.props.orderData.status!=1?
      require('../../images/schedule/waiting_icon.png'):
      require('../../images/schedule/blank_icon.png');
    let done = this.props.orderData.status==3?
      require('../../images/schedule/done_icon.png'):
      require('../../images/schedule/blank_icon.png');

    let waitingText = <Text style={[styles.normalText,{color:"#F08300"}]}>预约中</Text>;
    let appointingText = this.props.orderData.status!= 1?
      <Text style={[styles.normalText,{color:"#F08300"}]}>候诊中</Text>:
      <Text style={[styles.normalText,{color:"#999999"}]}>候诊中</Text>;
    let doneText = this.props.orderData.status==3?
      <Text style={[styles.normalText,{color:"#F08300"}]}>已完成</Text>:
      <Text style={[styles.normalText,{color:"#999999"}]}>已完成</Text>;

    let firstLine = this.props.orderData.status!=1?
      <View style={[styles.interLine,{backgroundColor:"#F08300"}]}></View>:
      <View style={styles.interLine}></View>;
    let secondLine = this.props.orderData.status==3?
      <View style={[styles.interLine,{backgroundColor:"#F08300"}]}></View>:
      <View style={styles.interLine}></View>;

    return (
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.tittle}>
          <View style={styles.titleContent}>
          <TouchableOpacity style={{width:50}} onPress={()=>this.popOut()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
            <Text style={styles.name}>订单详情</Text>
            <View style={{width:50}}></View>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <View style={{padding: 30}}>
            <View style={{flexDirection: 'row',alignItems: 'center', marginVertical: 5, marginLeft: 8, marginRight: 10}}>
              <Image source={waiting} />
              {firstLine}
              <Image source={appointing} />
              {secondLine}
              <Image source={done} />
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', marginVertical: 5}}>
              {waitingText}
              {appointingText}
              {doneText}
            </View>
          </View>
          <View style={{height: 148, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.3)',margin: 11,marginTop: 0, paddingVertical:11}}>
            <TouchableOpacity onPress={()=>this.handlePatient()}>
              <View style={styles.item}>
                <View style={styles.itemImage}>
                  <Image
                    source={require('../../images/load/kobe.jpg')}
                    style={styles.image}
                  />
                </View>

                <View style={styles.itemContent}>
                  <Text style={styles.normalText}>{this.props.orderData.name}</Text>

                  <View style={styles.jump}>
                    <Text style={[styles.normalText,{fontSize: 14}]}>失眠，抑郁</Text>
                    {/*<Image
                      source={require('../../images/load/jump.png')} style={{borderWidth:1}}
                    />*/}
                  </View>
                </View>
            </View>
           </TouchableOpacity>
           <View style={styles.hr}></View>
           <Text style={[styles.normalText,{marginLeft:11,}]}>提交订单时间： {this.props.orderData.date}</Text>
           <View style={styles.hr}></View>
           <Text style={[styles.normalText,{marginLeft:11}]}>订单编号： 2015012610003001</Text>
          </View>
          <View style={{marginLeft:11}}>
            <Text style={[styles.normalText,{color: '#F08300'}]}>咨询内容</Text>
          </View>
          <View style={{flex:1, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.3)',margin: 11, padding:11}}>
            <Text style={styles.normalText}>1. 已服用2小时药物是否可以减量？</Text>
            <Text style={styles.normalText}>2. 服用安眠药物是否可以开车？</Text>
            <Text style={styles.normalText}>3. 服用此药物时是否可与同类药物一起服用？</Text>
          </View>
          {/*<TouchableOpacity onPress={()=>this.deleteOrder()} style={styles.deleteButton}>
            <Text style={[styles.normalText,{color: '#666666'}]}>删除订单</Text>
          </TouchableOpacity>*/}
          <View style={{height:26}}>
          </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles=StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
	},
  container: {
    height: Dimensions.get('window').height - 10,
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
  normalText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 16,
    fontWeight: '100',
    color: '#FFFFFF',
  },
  interLine: {
    height: 2,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    marginHorizontal: 2,
  },
  hr: {
    borderBottomWidth:1,
    borderColor: '#AAAAAA',
    height: 1,
    marginVertical:8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height:52,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 70,
    marginRight:10,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 11,
    width: 140,
    height: 46,
    borderRadius: 6,
    backgroundColor: '#DDDDDD',
  },
});
export default OrderDetails;
