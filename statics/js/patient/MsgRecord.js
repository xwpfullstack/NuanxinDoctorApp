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
  TouchableHighlight,
   TouchableOpacity,
   ScrollView,
} from 'react-native';




class MsgRecord extends Component{
  constructor(props){
    super(props);
    this.state={

    };
 
};

contentView(){
    let times=this.props.data.ctime.split('-');
    return (
    <View style={styles.result}>
      <Text>{`${times[0]}年${times[1]}月${times[2]}号`}</Text>
      <View style={{flexDirection: 'row',marginTop:10,}}>
      <View  style={{flexDirection: 'row',flex:1,}}>
        <Text>得分：</Text>
        <Text style={{color:'red'}}>{this.props.data.score+''}</Text>
      </View>
      <View style={{flexDirection: 'row',flex:1,marginLeft:20}}>
        <Text>结果：</Text>
        <Text style={{color:'red'}}>{this.props.data.result}</Text>
      </View>
      </View>
    </View>);
}

  render(){
    let txtContent=this.contentView();
    return  (
          <View style={styles.container}>
              <ScrollView style={styles.Main}>
              <View style={{flex:1,justifyContent:'center',height:30,borderWidth:1,
                        borderColor:'white',backgroundColor:'#EDEDED',alignSelf:'stretch',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold'}}>{this.props.data.test}</Text>
               </View>
              {txtContent}
                </ScrollView>
                <View  style={styles.BtnGroup}>
                    <TouchableHighlight
                          onPress={()=>this.props.closeModal()} 
                          style={[styles.submitContent,]}><Text style={{color:'#FE9300'}}>关闭</Text>
                    </TouchableHighlight>
                </View>
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
        color:'rgb(0,0,0)',
    },
    cheack:{
      flex:1,
      flexDirection: 'column',
       justifyContent:'center',
        alignItems: 'center',
        borderBottomWidth:1,
    },
    BtnGroup:{
      flex:1,
        flexDirection: 'row',
       justifyContent:'center',
        alignItems: 'center',
    },
    Main:{
        flex:3,
        marginTop:20,
        flexDirection: 'column',
    },
    result:{
        flexDirection: 'column',
        alignSelf:'stretch',
        height:150,
        alignItems:'center',
        justifyContent:'center',
    },
      submitContent:{
      flex:1,
      borderWidth:1,
      borderColor:'#FE9300',
      borderRadius:15,
      height:30,
      marginLeft:20,
      marginRight:20,
      alignItems:'center',
       justifyContent:'center',
  },
  radioContainer:{

  },
});


export default MsgRecord;
