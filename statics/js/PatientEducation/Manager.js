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
  ListView,
  ToastAndroid,
} from 'react-native';

import Picker from 'react-native-picker';


var images=[
require('../../images/icon/SAS.jpg'),
require('../../images/icon/test1.jpg'),
require('../../images/icon/test2.jpg'),
require('../../images/icon/test3.jpg'),
];

var json={};
var sectionIDS=[];
var rowIDs=[];


import Loading from '../patient/Loading';
class Manager extends Component {
     constructor(props){
        super(props);
             var getSectionData = (dataBlob, sectionID) => {
                    return dataBlob[sectionID];
             }
              var getRowData = (dataBlob, sectionID, rowID) => {
                    return dataBlob[sectionID + ':' + rowID];
             }
              var dataSource=new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                getSectionData: getSectionData,
                getRowData: getRowData,
             });

        this.state={
            isLoad:false,
            isSuccess:true,
            dataSource:dataSource,
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

createTableData(){
       json={};
     sectionIDS=[];
     rowIDs=[];
      for (let data of this.state.msgList){
            if (!json[data['pushtime']]) {
                 json[data['pushtime']]={};
                 sectionIDS.push(data['pushtime']);
                 rowIDs.push([]);
            }
            let index;
            for (var i = 0; i < sectionIDS.length; i++) {
                if (sectionIDS[i] == data['pushtime']) {
                    index=i;
                    break;
                }
            };
          let  row= (rowIDs[index].length+1)+'';
          rowIDs[index].push(row)
           json[data['pushtime']+':'+row]=data;
      };
      this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(json,sectionIDS,rowIDs),});
}

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
  this.setState({isLoad:false});
  console.log(JSON.stringify({
               doctor_id:this.props.doctorId,
               diags:this.props.diag,
            }));
fetch(GetAppLesson_URL,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               doctor_id:this.props.doctorId,
               diags:this.props.diag,
            })
      })
      .then((response) => {
           return response.json();
      })
      .then((responseData)=>{
        console.log(responseData);
      
        if (responseData.status !='OK' ){
              this.setState({isSuccess:false,isLoad:true});
        }
        else{
             this.setState({isSuccess:true,isLoad:true,msgList:responseData.data});
             this.createTableData();
        }
      })
      .catch((err)=>{
              this.setState({isSuccess:false,isLoad:true});
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
                                    <Text  style={styles.txtColor}>{`第${value['pushtime']}天`}</Text>
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

changePEStatus(data){
   fetch(ModAppLessonList_URL,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               doctor_id:this.props.doctorId,
               lesson:data,
            })
      })
      .then((response) => {
           return response.json();
      })
      .then((responseData)=>{
        //console.log(responseData);
            data['selected']=1-data['selected']
            //console.log(data['selected']);
            this.setState({msgList:this.state.msgList});
      })
      .catch((err)=>{
              ToastAndroid.show('数据错误'+err.toString(), ToastAndroid.SHORT)
              console.log(err.toString());
      })
      .done();
} 


renderRow(rowData){
      return (
        <View style={styles.rowStyle}>
            <View style={styles.mainRow}>
                  <Image source={require('../../images/PE/pothoB.png')}>
                        <Image style={{height:106,width:131}} resizeMode='stretch' source={require('../../images/PE/doctorSay.png')}/>
                  </Image>
                  <Image resizeMode='stretch' style={styles.rowImageContent}  source={require('../../images/PE/titleB.png')}>
                        <Text style={{fontFamily:'PingFang-SC-Bold',fontSize:22,color:'white'}}>{rowData.title}</Text>
                     
                             <TouchableOpacity onPress={()=>this.changePEStatus(rowData)}  style={{height:37,width:37,top:-35}}>
                                    <Image  source={rowData.selected?require('../../images/PE/radioed.png'):require('../../images/PE/radio.png')} />
                            </TouchableOpacity>
                        
                  </Image>
            </View>
            <Image source={require('../../images/PE/pushTimeT.png')} />
        </View>
      );
}

renderSectionHeader(sectionData,sectionID){
      return (
            <View style={styles.pushtimeOut}>
                  <Image source={require('../../images/PE/pushTimeB.png')} style={styles.pushtimeInfo}>
                       <Text style={styles.titleTxt}>{`推送时间：第${sectionID}天`}</Text>
                  </Image>
            
                
            </View>
      );
};
handleBack(){
  this.props.navigator.pop();
};


  render() {
    if (this.state.isLoad) {
        if (this.state.isSuccess) {
               return (
                <Image
                          source={require('../../images/PE/back.png')}
                          style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}
                          >
                 <View style={styles.container}>
                         <View style={styles.tittle}>
                            <View style={styles.titleContent}>
                                <TouchableOpacity onPress={()=>this.handleBack()} style={{ flexDirection: 'row',width:50}}>
                                    <Image  source={require('../../images/icon/back.png')} style={{marginRight:5,}}/>
                                    <Text style={styles.txtColor}></Text>
                                </TouchableOpacity>
                                <Text style={[styles.txtColor,{fontSize:15}]}>患教</Text>
                                <Text style={[styles.txtColor,{width:50}]}></Text>
                            </View>
                        </View>
                     <ScrollView style={styles.patientMsg}>
                          <ListView
                                 ref="listview"
                                 style={styles.listview}
                                 initialListSize={this.state.msgList.length}
                                 dataSource={this.state.dataSource}
                                 scrollRenderAheadDistance={5}
                                 onEndReachedThreshold={20}
                                 renderRow={(data)=>{return this.renderRow(data);}}
                                 renderSectionHeader={this.renderSectionHeader} />
                     </ScrollView>
                 </View>
                 <View style={{height:45}}></View>
                 </Image>
            );
        }
        else{
          return(
                <Image
                      source={require('../../images/load/background.png')}
                      style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}>
                         <TouchableOpacity
                              onPress={()=>this.pullRrece()}
                              style={{height:Dimensions.get('window').height,
                                          width:Dimensions.get('window').width,
                                          flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
                              <Text style={{color:'#F08300',fontSize:16,}}>加载失败</Text>
                              <TouchableOpacity onPress={()=>this.pullRrece()}
                                      style={{borderWidth:1,height:50,width:100,borderRadius:25,borderColor:'#0094ff',justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{color:'#F08300',fontSize:16,}}>重新加载</Text>
                              </TouchableOpacity>
                        </TouchableOpacity>
                 </Image>
                 );
        }
    }
    else{
          return (
                    <Loading />
            );
    }
  
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    flexDirection: 'column',
    height:Dimensions.get('window').height,
  },
  pushtimeOut:{
         flexDirection: 'column',
         justifyContent:'center',
         alignItems:'center',
  },
  pushtimeInfo:{
     flexDirection: 'row',
      justifyContent:'center',
      
  },
  titleTxt:{
      color:'#ffffff',
      fontSize:14,
     fontFamily: 'PingFang-SC-Regular',
     marginTop:2,
  },
  rowStyle:{
       flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
  },
  mainRow:{
        flexDirection: 'row',
       
  },
  rowImageContent:{
       flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:20,
        width:260,
        alignItems:'center',
  },
  listview:{
      marginTop:10,
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
       marginLeft:5,
       flex:1,
       marginRight:5,
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

  export default Manager;
