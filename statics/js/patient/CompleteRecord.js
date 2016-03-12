'use strict';

import React, {
  Alert,
	View,
  ScrollView,
	Text,
  Image,
	TouchableOpacity,
  TouchableHighlight,
  Component,
	Dimensions,
  StyleSheet,
} from 'react-native';
import RecordTable from './RecordTable';
let recordData = [
  {
  date: '16年1月21日',
  hospital: '首都医科大学宣武医院',
  doctor: '李宁',
  department: '神经内科',
  diagnosis: '癫痫',
  prescription: [
    {medcine: '可元', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
    {medcine: 'a', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
    {medcine: 'b', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
    {medcine: 'c', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
    {medcine: 'd', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  ]
},
{
date: '16年1月22日',
hospital: '首都医科大学宣武医院',
doctor: '李宁',
department: '神经内科',
diagnosis: '癫痫',
prescription: [
  {medcine: '可元', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'a', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
]
},
{
date: '16年1月25日',
hospital: '首都医科大学宣武医院',
doctor: '李宁',
department: '神经内科',
diagnosis: '癫痫',
prescription: [
  {medcine: '可元', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'a', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'b', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'c', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'd', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
]
},
{
date: '16年1月27日',
hospital: '首都医科大学宣武医院',
doctor: '李宁',
department: '神经内科',
diagnosis: '癫痫',
prescription: [
  {medcine: '可元', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'a', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'b', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'c', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
  {medcine: 'd', period: '1月21日~1月21日', amount: '中午： 0.5粒'},
]
},
]
class CompleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: recordData,
      isLoad:false,
      isSuccess:true,
    }
  }
  componentDidMount(){
    this.postData();
    //  Alert.alert(this.state.data+'');
  }
  postData(){
    this.setState({isLoad:false});
      // Alert.alert('fetch');
      fetch(PatientCaseBook_URL,{
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 patient_id:this.props.patientId
              })
        })
        .then((response) => {
            // Alert.alert('', 'response');
             return response.json();
        })
        .then((responseData)=>{
          // console.log(responseData);
          // this.setState({data:responseData})
            // Alert.alert('',JSON.stringify(responseData));

        })
        .catch((err)=>{
            Alert.alert('catch error',err.toString())
            this.setState({isSuccess:false,isLoad:true});
            // console.log(err.toString());
        })
        .done();
  };
  addRecord() {

  }
  deleteData(date, medcine) {
    let i = 0;
    let dateIndex = -1;
    let medcineIndex = -1;
    let length = this.state.data.length;
    for (i = 0; i < length; i++) {
      if (this.state.data[i].date === date) {
        dateIndex = i;
      }
    }
    length = this.state.data[dateIndex].prescription.length;
    if (length === 1) {
      let tmp = this.state.data.slice(0, dateIndex).concat(this.state.data.slice(dateIndex + 1));
      this.setState({data: tmp});
    } else {
      for (i = 0; i < length; i++) {
        if (this.state.data[dateIndex].prescription[i].medcine === medcine) {
          medcineIndex = i;
        }
      }
      let tmp = this.state.data[dateIndex].prescription.slice(0, medcineIndex).concat(this.state.data[dateIndex].prescription.slice(medcineIndex + 1));
      this.state.data[dateIndex].prescription = tmp;
      this.setState({data: this.state.data});
    }
  }
  modifyData(date, medcine, data) {
    let i = 0;
    let dateIndex = -1;
    let medcineIndex = -1;
    let length = this.state.data.length;
    for (i = 0; i < length; i++) {
      if (this.state.data[i].date === date) {
        dateIndex = i;
      }
    }
    length = this.state.data[dateIndex].prescription.length;
    for (i = 0; i < length; i++) {
      if (this.state.data[dateIndex].prescription[i].medcine === medcine) {
        medcineIndex = i;
      }
    }
    this.state.data[dateIndex].prescription[medcineIndex] = data;
    this.setState({data: this.state.data});
  }

  popOut() {
      this.props.navigator.pop();
  }

	render(){
		return (
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.tittle}>
          <View style={styles.titleContent}>
          <TouchableOpacity style={{width:50}} onPress={()=>this.popOut()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
            <Text style={styles.name}>完整病例</Text>
            <View style={{width:50}}></View>
          </View>
        </View>
        <ScrollView style = {styles.container}>
          {/*<TouchableHighlight
            underlayColor='rgba(34,26,38,0.1)'
            onPress={()=>this.addRecord()}
            style={styles.buttonNewStyle}
          >
            <Text style={styles.buttonNewText}>+添加病例</Text>
          </TouchableHighlight>*/}
          <View style={{height:11}}>
          </View>
          {
            this.state.data.map((data)=>(
            <RecordTable
              key = {data.date}
              style = {styles.recordTable}
              navigator = {this.props.navigator}
              recordData = {data}
              deleteData = {(date, medcine)=>{this.deleteData(date, medcine)}}
              modifyData = {(date, medcine, data)=>{this.modifyData(date, medcine, data)}}
            />
          ))}
          <View style={{height:30}}>
          </View>
        </ScrollView>
      </Image>
		);
	}
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonNewText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 14,
    color: '#FEA501',
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
  buttonNewStyle: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FEA501',
    borderWidth: 1,
    borderRadius: 20,
    margin: 11,
  },
  recordTable: {
    marginBottom: 11,
    marginHorizontal: 11,
  }
})
export default CompleteRecord;
