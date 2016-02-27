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
} from 'react-native';


import {RadioButtons} from 'react-native-radio-buttons';

var options=[true,false];
var days;

class EatDatesModal extends Component{
  constructor(props){
    super(props);
    this.state={

    };
    days=this.props.isEveryday;
};

renderContainer(optionNodes){
      return <View style={styles.radioContainer}>{optionNodes}</View>;
};
renderOption(option, selected, onSelect, index) {
    const textBaseStyle = {
        marginTop: 10,
        marginBottom: 10,
        color: '#ccc',
        flex: 1,
        fontSize: 14,
        textAlign:'center',
      };
      const baseStyle = {
          flex:1,
          flexDirection: 'row',
          justifyContent: 'center',
         alignItems:'center', 
         alignSelf:'stretch',
      };
      var style=baseStyle;
      var textStyle=textBaseStyle;
      var content ;
      var isEdit=false;
        if (selected) {
            style=[baseStyle,{backgroundColor:'#3845FF'}];
            textStyle=[textBaseStyle,{color:'white'}];
            isEdit=true;
          }
        
      if (index > 0) {
        style = [style, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
        }];
        content=(
          <TouchableOpacity style={[style,{justifyContent:'space-around'}]} onPress={onSelect} key={index}>
              <Text style={textStyle}>每</Text>
                 <View style={{height:30,width:50, justifyContent:'center',alignItems:'center',borderWidth:0,}} >
                                      <TextInput  
                                      style={{fontSize:15,color:'#000000'}} 
                                      placeholder='天数' 
                                      placeholderTextColor='#BFBFBF'
                                      textAlign='center'
                                      defaultValue={this.props.isEveryday>1?(this.props.isEveryday+''):''}
                                      editable={isEdit}
                                      keyboardType='numeric'   
                                      onChangeText={(txt)=>this.changeTxt(txt)}/>
                                </View>
              <Text style={textStyle}>日一次</Text>
          </TouchableOpacity>
        );
      } else {
        style = style;
        content=(
          <TouchableHighlight style={style} onPress={onSelect} key={index}>
              <Text style={textStyle}>每日服用</Text>
          </TouchableHighlight>
        );
      }
      return (
        content
      );
};

select(option){
   // this.state.TableMsg['option']=option;
   if (option) {
     days=1;
   }
};

changeTxt(txt){
    days=parseInt(txt);
};

  handleClickModal(name){
   
  };
close(){
    this.props.closeModal();
};
submit(){
     this.props.closeModal();
      this.props.changeDay(days);
};
  render(){
    return  (
          <View style={styles.container}>
              <View style={styles.Main}>
              <View style={{flex:1,justifyContent:'center',height:30,borderWidth:1,
                        borderColor:'white',backgroundColor:'#EDEDED',alignSelf:'stretch',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold'}}>选择服用间隔天数</Text>
               </View>
               <RadioButtons 
                        style={{flex:1}}
                        options={options}
                        selectedOption={this.props.isEveryday == 1}
                        onSelection={(option)=>this.select(option)}
                        renderContainer={(optionNodes)=>this.renderContainer(optionNodes) }
                        renderOption={(option, selected, onSelect, index)=>this.renderOption(option, selected, onSelect, index)}/>
                </View>
                <View  style={styles.BtnGroup}>
                    <TouchableHighlight
                          onPress={()=>this.close()} 
                          style={[styles.submitContent,]}><Text style={{color:'#FE9300'}}>取消</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                          onPress={()=>this.submit()} 
                          style={[styles.submitContent,{marginRight:10}]}><Text style={{color:'#FE9300'}}>提交</Text>
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
      marginLeft:10,
      alignItems:'center',
       justifyContent:'center',
  },
  radioContainer:{

  },
});


export default EatDatesModal;
