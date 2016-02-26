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
} from 'react-native';


var DocMsg={
  'title':'',
  'name':'',
  'content':'',
};

class DoctorRecord extends Component{
  constructor(){
    super();
    this.state={
        DocMsg:DocMsg,
    };
};
handleBack(){
  this.props.navigator.pop();
};
changeTxt(type,txt){
  this.state.DocMsg[type]=txt;
    this.setState({DocMsg:this.state.DocMsg});
};
submit(){
    console.log(this.state.DocMsg);
};

render(){
    return  (
        <View style={styles.container}>
          <View style={styles.tittle}>
              <View style={styles.titleContent}>
                  <TouchableOpacity onPress={()=>this.handleBack()} style={{ flexDirection: 'row',}}>
                      <Image  source={require('../../images/icon/back.png')} style={{marginRight:5,}}/>
                  </TouchableOpacity>
                  <Text style={[styles.txtColor,{fontSize:15}]}>医嘱</Text>
                  <TouchableOpacity onPress={()=>this.submit()}>
                  <Text style={[styles.txtColor,{fontSize:15}]}>提交</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.inputGroup}>
                    <TextInput  
                              style={styles.TextInput} 
                              placeholder='标题' 
                              value={this.state.DocMsg['title']}
                              placeholderTextColor='#BFBFBF'
                              onChangeText={(txt)=>this.changeTxt('title',txt)}
                              underlineColorAndroid='black'/>
                      <TextInput  
                              style={styles.TextInput} 
                              placeholder='患者姓名' 
                               value={this.state.DocMsg['name']}
                              placeholderTextColor='#BFBFBF'
                              onChangeText={(txt)=>this.changeTxt('name',txt)}/>
                          <View style={{marginTop:15,borderWidth:1}}>
                               <TextInput  
                                       style={[styles.TextInput,{marginTop:0}]}  
                                      placeholder='内容' 
                                       value={this.state.DocMsg['content']}
                                      placeholderTextColor='#BFBFBF'
                                      onChangeText={(txt)=>this.changeTxt('content',txt)}
                                      underlineColorAndroid='transparent'
                                      multiline={true}
                                      numberOfLines={5} />
                          </View>
              </View>
             
        </View>
      );
};
};


const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection: 'column',    
    backgroundColor:'#cccccc',
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
  inputGroup:{
      flexDirection: 'column',   
      borderWidth:1,
      margin:10,
      marginTop:20,
      marginBottom:20,
      padding:20,
       justifyContent: 'center',
       alignItems:'center',
       borderRadius:20,
       borderColor:'#cccccc',
       backgroundColor:'white',
  },
  TextInput:{
      fontSize:15,
      color:'#000000',
      marginTop:15,
  },
  mainView:{
    flex:1,
    flexDirection: 'column',    
    backgroundColor:'#F4F1F5',
    alignItems:'center',
  },



});


export default DoctorRecord;
