/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Picker from 'react-native-picker';


var images=[
require('../../images/icon/SAS.jpg'),
require('../../images/icon/test1.jpg'),
require('../../images/icon/test2.jpg'),
require('../../images/icon/test3.jpg'),
];
class PIndex extends Component {
     constructor(props){
        super(props);
        this.state={
            diagList:[],
            options:[],
            dickMsg:[''],
            ischeack:[],
            msgList:[],
            msgListCheack:[],
        }
    };

componentWillMount(){
    this.pullRrece();
};

modifMsg(){
     let msgList=[];
      let msgListCheack=[];
    for (let i = 0; i < 4; i++) {
      msgList.push({name:'抑郁状态'+(i+1),time:(i+1)*5});
      msgListCheack.push(true);
    };
   
    return [msgList,msgListCheack];
}

CreateOption(datas){
    datas.forEach((value,index)=>{
        if (index<4) {
            this.state.options.push(value);
            if (index == 0) {
                this.state.ischeack.push(true);
            }
            else{
                this.state.ischeack.push(false);
              }
        }
        else{
          if (index == 4) {
             this.state.options.push({name:'更多'});
               this.state.ischeack.push(false);
               this.state.dickMsg[0]=value['name'];
          }
          else{
            this.state.dickMsg.push(value['name']);
          }
        }
    });
     let tempData = this.modifMsg();
    this.setState({options:this.state.options,dickMsg:this.state.dickMsg,msgList:tempData[0],msgListCheack:tempData[1]});
}

pullRrece(){
fetch(GetdocDiags_URL,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               doctor_id:this.props.doctorId
            })
      })
      .then((response) => {
           return response.json();
      })
      .then((responseData)=>{
        //console.log(responseData);
        if (responseData.status !='success' ){

        }
        else{
           this.CreateOption(responseData.docdiag);
             this.setState({diagList:responseData.docdiag});
        }
       
      })
      .catch((err)=>{
               console.log(err.toString());
      })
      .done();
}

select(option){
  if (option['name'] == '更多') {
     this.picker.toggle();
  }
};

onSelect(i){
  //
      if (i == this.state.ischeack.length-1 && this.state.options[i]['name'] == '更多') {
                this.picker.toggle();
      }
      else{
            let tempData = this.modifMsg()
            this.setState({ischeack:this.state.ischeack.map((value,index)=>{
                  return i == index;
            }),msgList:tempData[0],msgListCheack:tempData[1]});
      }
};

optionNodes(){
 // console.log(this.state.options);
     var content=this.state.ischeack.map((value,index)=>{
        let result=(
             <TouchableOpacity  style={[styles.baseStyle,{backgroundColor:this.state.ischeack[index]?'#F08300':'#ffffff'}]} onPress={()=>this.onSelect(index)} key={index}>
                    <Text style={[styles.textBaseStyle,{color:this.state.ischeack[index]?'#ffffff':'#F08300'}]}>{this.state.options[index]['name'].substring(0,4)}</Text>
          </TouchableOpacity>
        );
      return result;
    });

return content;    
};


pickerDone(pickedValue){
   let tempData = this.modifMsg()
   //
       this.setState({ischeack:this.state.ischeack.map((value,index)=>{
                  return (this.state.options.length-1) == index;
            }),msgList:tempData[0],msgListCheack:tempData[1]});
};

del(index){
     this.state.msgListCheack.splice(index,1);
     this.state.msgList.splice(index,1);
     this.setState({msgListCheack:this.state.msgListCheack,msgList:this.state.msgList});
};

change(index){
  console.log( this.state.msgListCheack);
    this.state.msgListCheack[index]=this.state.msgListCheack[index]?false:true;
   this.setState({msgListCheack:this.state.msgListCheack});
};

CreatPulListView(){
    let content=this.state.msgList.map((value,index)=>{
        return (
                       <View  key = {index} style={styles.rowPaT}>
                       <View style={styles.title}>
                      <View style={styles.msgRow}>
                      <View style={{flex:3}}>
                          <Text style={{textAlign:'center',fontSize:15,fontWeight:'400',color:'white'}}>{value['name']}</Text>
                      </View>
                          <TouchableOpacity onPress={()=>this.del(index)}>
                                <Image  style={{height:25,width:25,flex:1}} resizeMode='contain' source={require('../../images/icon/del.png')}/>
                          </TouchableOpacity>
                      </View>
                      <Image style={{alignSelf:'stretch', height:200,width:(Dimensions.get('window').width-45)*0.75}} source={images[index]}  resizeMode='stretch' />
                      </View>

                      <View style={styles.buttonAndTIme}>
                            <TouchableOpacity 
                                  onPress={()=>this.change(index)}
                                  style={{height:15,width:15,borderRadius:7.5,borderWidth:1,borderColor:'#000000',backgroundColor:this.state.msgListCheack[index]?'#F08300':'#EAEAEA'}}> 
                            </TouchableOpacity>
                            <View style={{flexDirection: 'column',marginLeft:5}}>
                                    <Text style={styles.txtColor}>推送时间：</Text>
                                    <Text  style={styles.txtColor}>{`第${value['time']}天`}</Text>
                            </View>
                      </View>
                    </View>
        );
    });
    return content;
};

addPatient(){
  //AddLessons
  this.props.navigator.push({
      name:'AddLessons',
  })
};


  render() {
    return (
      <Image
                source={require('../../images/load/background.png')}
                style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}
                >
       <View style={styles.container}>
            <View style={styles.tittle}>
                  <View style={styles.titleContent}>
                 
                    <Text style={styles.name}>
                                                 患者教育
                                             </Text>
                 
                  </View>
          </View>
            <View style={styles.radioContainer}>{this.optionNodes()}</View>
            <View style={{ flexDirection:'row',justifyContent:'flex-end'}}>
                    <TouchableOpacity  onPress={()=>this.addPatient()}  style={styles.add}>
                          <Image  source={require('../../images/icon/add.png')} /> 
                    </TouchableOpacity>
            </View>
           <ScrollView style={styles.patientMsg}>
                {this.CreatPulListView()}
           </ScrollView>


             <Picker
                        style={{
                            height: 200,
                        }}
                        pickerBtnText={'提交'}
                        pickerCancelBtnText={'取消'}
                        ref={picker=>this.picker = picker}
                        showDuration={330}
                        showMask={true}
                        onPickerDone={(pickedValue) => this.pickerDone(pickedValue)}
                        pickerData={this.state.dickMsg}
                        selectedValue={this.state.dickMsg[0]}/>

       </View>
       <View style={{height:100}}></View>
       </Image>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      height:Dimensions.get('window').height-70,
      flex:1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  radioContainer:{
      flexDirection: 'row',
      height:30,
  },
  patientMsg:{
       flexDirection: 'column',
       marginLeft:20,
       marginRight:20,
  },
    tittle:{
    backgroundColor:'#878181',
    flexDirection: 'column',
    height:40,
    justifyContent: 'center',
  },
  titleContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft:10,
    marginRight:10,
  },
  name:{
    color:'white',
     fontSize:18,
  },
  textBaseStyle:{
        color: '#F08300',
        flex: 1,
        fontSize: 14,
        textAlign:'center',
        borderWidth:1,
        marginTop:4,
        borderColor:'#ffffff',
      },
baseStyle:{
        flex:1,
        height:30,
        flexDirection: 'column',
        backgroundColor:'#ffffff',
        borderColor:'#F08300',
        borderWidth:1,
        borderRightWidth:0,
        justifyContent: 'center',
       alignItems:'center',
      },
      add:{
          alignSelf: 'flex-end',
        
          justifyContent:'center',
          alignItems:'center',
          margin:10,
        
      },
      rowPaT:{
           flexDirection: 'row',
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
      },
      msgRow:{
           flexDirection: 'row',
           justifyContent:'center',
           alignItems:'center',
           borderWidth:1,
            alignSelf:'stretch',
      },
      title:{
           flex:3,
             flexDirection: 'column',
           justifyContent:'center',
           alignItems:'center',

      },
      buttonAndTIme:{
             flexDirection: 'row',
             justifyContent:'center',
             alignItems:'center',
             flex:1,
             marginLeft:5,
      },
      txtColor:{
        color:'white',
      }

});

  export default PIndex;
