'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
                
import EatMedineItem from './EatMedineItem';
class EatMedine extends Component{
  constructor(){
    super();  

   // let value=this.props.PatientMsg;
    this.state={
      isLoad:true,
      PatientMsg:{'sick':[],'media':[],},
  };
};

reDrawPage(Msg){
    this.setState({PatientMsg:Msg})
};

submit(){
     var json= JSON.stringify(this.state.PatientMsg);
     //Alert.alert(json);
     console.log(json);
};
mediaControl(){
    let MediaList=this.state.PatientMsg['media'].map((value,index)=>{
        return   <EatMedineItem key={index} media={value} />
    });
    return MediaList;

};
  render(){
    var Content;
    if (this.state.PatientMsg['media'].length>0){
            Content=  <ScrollView>
                  {this.mediaControl()}
                  <View style={styles.Submit}>
                          <TouchableOpacity style={[styles.submitContent,{borderWidth:0,backgroundColor:'rgba(0,0,0,0)'}]}><Text></Text></TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.submit()}  style={[styles.submitContent,{marginRight:50,}]}><Text style={styles.txtSubStyle}>提交</Text></TouchableOpacity>
                  </View>
            </ScrollView>
    }
    else
    {

             Content=  <View style={styles.noSelect}>
                  <Text style={styles.noSelectTxt}>还没有选择任何药物...</Text>
              </View>
          
    }
  
    if (this.state.isLoad) {
      return  (
          <View style={styles.container}>
            {Content}
          </View>
        );
      }
       else{
            return <Text>AAAA</Text>;
        };
};
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    height:Dimensions.get('window').height-200,
  },
  noSelect:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  noSelectTxt:{
      fontSize:16,
      fontWeight:'400',
  },
  MainMB:{
      margin:10,
      backgroundColor:'white',
      borderRadius:5,
      borderWidth:1,
      borderColor:'white',
  },
  Submit:{
     marginTop:20,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
  },
  submitContent:{
      flex:1,
      borderWidth:1,
      borderColor:'#FE9300',
      borderRadius:15,
      height:30,
      marginLeft:50,
       justifyContent:'center',
  },
  txtSubStyle:{
      textAlign:'center',
      color:'#FE9300',
  },
  row:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    padding:7,
  },
  rowData:{
    borderWidth:1,
    flex:1,
    marginLeft:20,
    height:30,
    justifyContent:'center',
    borderRadius:15,
    borderColor:'rgb(55,55,55)',
  },
  rowDataText:{
    textAlign:'center',
  },

});


export default EatMedine;
