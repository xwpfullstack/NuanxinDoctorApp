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




class MsgFollow extends Component{
  constructor(props){
    super(props);
    this.state={

    };
 
};

  render(){
    let txtContent;
    if (this.props.data.content == '') {
        txtContent= <View style={{alignItems:'center',justifyContent:'center',}}><Text>没有随访记录!!!</Text></View> ;
    }
    else{
      txtContent=<Text>{this.props.data.content}</Text>
    }
    return  (
          <View style={styles.container}>
              <ScrollView style={styles.Main}>
              <View style={{flex:1,justifyContent:'center',height:30,borderWidth:1,
                        borderColor:'white',backgroundColor:'#EDEDED',alignSelf:'stretch',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold'}}>随访记录</Text>
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


export default MsgFollow;
