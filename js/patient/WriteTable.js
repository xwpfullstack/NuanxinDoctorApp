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
        color: '#FFFFFF',
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
          borderTopColor: '#F08300',
          borderTopWidth: 1,
        }];
      } else {
        style = baseStyle;
      }

      if (selected) {
        style=[baseStyle,{backgroundColor:'rgba(255,255,255,0.8)'}];
        textStyle=[textBaseStyle,{color:'#F08300',fontWeight:'900'}];
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
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
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
                    <Text style={[styles.normalText,{margin:11, alignSelf:'flex-start'}]}>患者姓名</Text>
                    <View style={{flex:1,justifyContent:'center',height:40,backgroundColor:'#F08300',alignSelf:'stretch',alignItems:'center'}}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>选择量表类型</Text>
                    </View>
                   <RadioButtons
                        style={{flex:1}}
                        options={options}
                        onSelection={(option)=>this.select(option)}
                        renderContainer={(optionNodes)=>this.renderContainer(optionNodes) }
                        renderOption={(option, selected, onSelect, index)=>this.renderOption(option, selected, onSelect, index)}/>
              </View>

        </Image>
      );
};
};


const styles = StyleSheet.create({
    backgroundImage: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  	},
    txtColor:{
        color:'#FFFFFF',
    },
    normalText: {
      fontFamily: 'PingFang-SC-Regular',
      fontSize: 16,
      fontWeight: '100',
      color: '#FFFFFF',
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
      margin:10,
      marginTop:20,
      marginBottom:20,
      padding:20,
       justifyContent: 'center',
       alignItems:'center',
       borderRadius:20,
       backgroundColor:'rgba(255,255,255,0.3)',
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
    borderColor:'#F08300',
    marginRight:1,
    marginLeft:1,
    top:-1,
  },
});


export default WriteTable;