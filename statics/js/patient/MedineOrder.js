'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TextInput,
  Alert,
 TouchableHighlight,
 TouchableOpacity,
 ScrollView,
 ToastAndroid,
} from 'react-native';


var PatientMsg={
  'diag':[],
  'med':[],
  'doctor_id':'',
  'patient_id':'',
};

const DAYDIFF=86400000;

import LoadingModal from './LoadingModal';

class MedineOrder extends Component{
  constructor(props){
    super(props);
    PatientMsg=this.props.datas;

    console.log(PatientMsg);
};
handleBack(){
  this.props.navigator.pop();
};


postPatient(){
  this.refs['modal'].tiggleModel(true);
  let tempdiags=PatientMsg['diag'].map((value)=>{
      return value['name'];
  });
  console.log(JSON.stringify({
               doctor_id:PatientMsg['doctor_id'],
               patient_id:PatientMsg['patient_id'],
               diag:tempdiags,
               med:PatientMsg['med'],
            }));
    fetch(SavePrescript_URL,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               doctor_id:PatientMsg['doctor_id'],
               patient_id:PatientMsg['patient_id'],
               diag:tempdiags,
               med:PatientMsg['med'],
            })
      })
      .then((response) => {
           return response.json();
      })
      .then((responseData)=>{
        console.log(responseData);
          this.refs['modal'].tiggleModel(false);
         // this.handleBack();
          //this.props.backMain();
          this.props.popToRoute({
            name:'doctorHomePage',
          });
      })
      .catch((err)=>{
          console.log(err.toString());
            this.refs['modal'].tiggleModel(false);
            ToastAndroid.show('提交数据出错'+err.toString(), ToastAndroid.SHORT);
      })
      .done(); 
};


createOrder(){
 
    let content= PatientMsg['med'].map((value,index)=>{
      let nums=0;
      let tempTxt=['早','中','晚','睡前'];
      let contentItems=value['mediaNums'].map((items,num)=>{
            let txtValue='';
            nums+=(items[5]*items[6]);
            items.forEach((kvalue,kindex)=>{
                if (kindex < 4){
                     if (kvalue == true) {
                          if (kindex != 3) {
                              txtValue+=(tempTxt[kindex]+',');
                              
                          }
                          else{
                               txtValue+=(tempTxt[kindex]);
                         }
                   }
                }
            });
            return (
            <View style={styles.medieItems} key={'num'+num}>
                <Text style={styles.txtStyle}>{`${items[5]}天`}</Text>
                <Text  style={styles.txtStyle}>{`${items[4]}${value['unit']}`}</Text>
                <Text  style={styles.txtStyle}>{txtValue}</Text>
                <Text  style={styles.txtStyle}>{items[6] == 1?'每日服用':`每隔${items[6]-1}天服用`}</Text>
            </View>);
      });
        let nowDate=new Date(value['startTime']);
        let toDate=new Date(nowDate.getTime()+nums*DAYDIFF);
          return (
                <View style={styles.contentItem} key={index}>
                    <View style={styles.outerItems}> 
                          <Text style={[styles.txtStyle,{flex:1}]}>药物名称：</Text>
                          <Text style={[styles.txtStyle,{flex:3}]}>{value['name']}</Text> 
                    </View>
                    <View style={styles.outerItems}>
                             <Text style={[styles.txtStyle,{flex:1}]}>服用时间：</Text>
                             <View style={{flexDirection: 'row',marginRight:20,justifyContent:'space-between',flex:3}}>
                                  <Text style={[styles.txtStyle,]}>{`${nowDate.getMonth()}/${nowDate.getDate()}-${toDate.getMonth()}/${toDate.getDate()}`}</Text> 
                                  <Text style={[styles.txtStyle,]}>{`共${nums}天`}</Text> 
                              </View>
                    </View>
                    <View style={styles.eatMedies}>
                          <Text style={[styles.txtStyle,{flex:1}]}>服用方法：</Text>
                          <View style={styles.medies}>
                              {contentItems}
                          </View>
                    </View>
                </View>
            );
    });
    return content
}

render(){
    return  (
        <View style={styles.container}>
          <View style={styles.tittle}>
              <View style={styles.titleContent}>
                  <TouchableOpacity onPress={()=>this.handleBack()} style={{ flexDirection: 'row',width:50}}>
                      <Image  source={require('../../images/icon/back.png')} style={{marginRight:5,}}/>
                      <Text style={styles.txtColor}></Text>
                  </TouchableOpacity>
                  <Text style={[styles.txtColor,{fontSize:15}]}>添加药单</Text>
                  <Text style={[styles.txtColor,{width:50}]}></Text>
              </View>
          </View>
          <ScrollView>
          {this.createOrder()}
          <View style={{ flexDirection: 'row',marginTop:20,}}>
                <View style={{flex:1}}></View>
                <View style={{ flexDirection: 'row',flex:1,alignItems:'center',justifyContent:'space-around'}}>
                      <TouchableOpacity onPress={()=>this.handleBack()} style={styles.button}><Text style={styles.buttonTxt}>返回</Text></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.postPatient()} style={styles.button}><Text style={styles.buttonTxt}>确定</Text></TouchableOpacity>
                </View>
          </View>
          </ScrollView>
             <LoadingModal ref='modal' />
        </View>
      );
};
};


const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection: 'column',    
    },
    txtColor:{
        color:'rgb(255,255,255)',
    },
    tittle:{
    backgroundColor:'#757575',
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
  FGView:{
    height:10,
    backgroundColor:'#FE9300',
  },
  mainView:{
    flex:1,
    flexDirection: 'column',    
    backgroundColor:'#F4F1F5',
    alignItems:'center',
  },
  tarbar:{
     flexDirection: 'row',
     justifyContent:'center',
     marginTop:12,
     height:30,
     backgroundColor:'#F4F1F5',
     width:Dimensions.get('window').width-150,
     borderWidth:1,
     borderColor:'#FE9300',
     marginBottom:12,    
  },
  tarbarItem:{
    flex:1,
    height:30,
    alignSelf:'center',
    justifyContent:'center',
   
  },
  tarbarItemText:{
      textAlign:'center',
     color:'#FE9300',
  },
  contentItem:{
      backgroundColor:'#ffffff',
      margin:10,
      marginLeft:20,
      marginRight:20,
      borderRadius:20,
      flexDirection: 'column',    
      padding:10,
  },
  medies:{
      flexDirection: 'column',
      borderLeftWidth:1,
      borderColor:'gray',
      paddingLeft:10,
      flex:3
      
  },
  medieItems:{
    flexDirection: 'row',
    marginBottom:5,
    justifyContent:'space-between',
  },
  txtStyle:{
      color:'#000000',
      fontSize:12,
      marginRight:20,
  },
  outerItems:{
        flexDirection: 'row',
        marginBottom:5,
  },
  eatMedies:{
         flexDirection: 'row',
         borderTopWidth:1,
         padding:10,
         paddingLeft:0,
  },
  button:{
      borderWidth:1,
      borderColor:'#FE9300',
      height:25,
      borderRadius:12.5,
      width:50,
      justifyContent:'center',
      alignItems:'center',
  },
  buttonTxt:{
      color:'#FE9300',
  },


});


export default MedineOrder;
