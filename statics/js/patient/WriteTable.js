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

import {RadioButtons } from 'react-native-radio-buttons';

var TableMsg={
  'name':'',
  'option':'',
};
const options=[
  '抑郁自测量表',
  '焦虑自测量表',
  '睡眠信念量表', 
  '匹兹堡测试量表' ,
  '阿森斯测试量表'
];
class WriteTable extends Component{
  constructor(){
    super();
    this.state={
        TableMsg:TableMsg,
    };
};
handleBack(){
  this.props.navigator.pop();
};
changeTxt(type,txt){
  this.state.TableMsg[type]=txt;
    //this.setState({TableMsg:this.state.TableMsg});
};
submit(){
    console.log(this.state.TableMsg);
};
renderContainer(optionNodes){
  //width:Dimensions.get('window').width
      return <View style={styles.radioContainer}>{optionNodes}</View>;
};
renderOption(option, selected, onSelect, index) {
    const textBaseStyle = {
        marginTop: 10,
        marginBottom: 10,
        color: '#3845FF',
        flex: 1,
        fontSize: 14,
        textAlign:'center',
      };
      const baseStyle = {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
       alignItems:'center', 
       alignSelf:'stretch',
      
     
      };
      var style;
      var textStyle=textBaseStyle;
      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
        }];
      } else {
        style = baseStyle;
      }

      if (selected) {
        style=[baseStyle,{backgroundColor:'#3845FF'}];
        textStyle=[textBaseStyle,{color:'white'}];
      }

      return (
        <TouchableOpacity style={style} onPress={onSelect} key={index}>
            <Text style={textStyle}>{option}</Text>
        </TouchableOpacity>
      );
};

select(option){
    this.state.TableMsg['option']=option;
};
render(){
    return  (
        <View style={styles.container}>
          <View style={styles.tittle}>
              <View style={styles.titleContent}>
                  <TouchableOpacity onPress={()=>this.handleBack()} style={{ flexDirection: 'row',}}>
                      <Image  source={require('../../images/icon/back.png')} style={{marginRight:5,}}/>
                  </TouchableOpacity>
                  <Text style={[styles.txtColor,{fontSize:15}]}>填写量表</Text>
                  <TouchableOpacity onPress={()=>this.submit()}>
                  <Text style={[styles.txtColor,{fontSize:15}]}>提交</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.inputGroup}>
                    <TextInput  
                              style={styles.TextInput} 
                              placeholder='患者姓名' 
                              placeholderTextColor='#BFBFBF'
                              onChangeText={(txt)=>this.changeTxt('name',txt)}
                              underlineColorAndroid='black'/>
                    <View style={{flex:1,justifyContent:'center',height:40,borderWidth:1,
                        borderColor:'white',backgroundColor:'#EDEDED',alignSelf:'stretch',alignItems:'center'}}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>选择量表类型</Text>
                    </View>
                   <RadioButtons 
                        style={{flex:1}}
                        options={options}
                        onSelection={(option)=>this.select(option)}
                        renderContainer={(optionNodes)=>this.renderContainer(optionNodes) }
                        renderOption={(option, selected, onSelect, index)=>this.renderOption(option, selected, onSelect, index)}/>
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
  radioContainer:{
    flex:1, 
    flexDirection: 'column',   
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'stretch',
    borderWidth:5,
    borderTopWidth:0,
    borderColor:'#EDEDED',
    marginRight:1,
    marginLeft:1,
    top:-1,
  },
});


export default WriteTable;
