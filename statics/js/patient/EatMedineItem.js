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
                

  var isCheack=[
  ['j',false],
  ['m',false],
  ['h',false],
];
var MediaNums=[
  [true,false,false,false,,],
  [true,false,false,false,,],
];
class EatMedineItem extends Component{
  constructor(props){
    super(props);  
    this.state={
      Cheack:isCheack,
      MediaNums:this.props.media['MediaNums'],
    };
  };

cheackTime(name){
  var newList=isCheack.map((value,index)=>{
    return [value[0],name == value[0]];
  });
  this.setState({Cheack:newList});
};
more(){
  var newList=isCheack.map((value,index)=>{
    return [value[0],false];
  });
  this.setState({Cheack:newList});
};
cheackMedia(index,rows){
    var newList=this.state.MediaNums[index].map((value,i)=>{
      if (i <=3) {
          if (rows == i) {
              return true;
          }
          else{
            return false;
          }
      }
      else{
        return value;
      }
    });
    this.state.MediaNums[index]=newList;
    this.setState({MediaNums:this.state.MediaNums});
};

add(index,row){
  if(this.state.MediaNums[index][row]){
       this.state.MediaNums[index][row]+=1;
  }
  else{
    this.state.MediaNums[index][row]=1;
  }
   this.setState({MediaNums:this.state.MediaNums});
};
minu(index,row){
    if(this.state.MediaNums[index][row]){
      if (this.state.MediaNums[index][row]>0) {
         this.state.MediaNums[index][row]-=1;
       }
      }
      else{
        this.state.MediaNums[index][row]=0;
      }
   this.setState({MediaNums:this.state.MediaNums});
};

changeTxt(index,row,txt){
  
    if (txt) {
        let txtInt=parseInt(txt);
        if (txtInt) {
           if (txtInt<0) {
            txtInt=0;
          }
          this.state.MediaNums[index][row]=txtInt;
        };
    }
    else{
        this.state.MediaNums[index][row]=null;
    }
    this.setState({MediaNums:this.state.MediaNums});
};

delPage(index){
//Alert.alert(''+this.state.MediaNums.length);
  if (this.state.MediaNums.length>1) {
      this.state.MediaNums.splice(index,1);
      this.setState({MediaNums:this.state.MediaNums});
  }
  else{
    Alert.alert('the end ,not delete');
  }
   
};
addPage(){
     this.state.MediaNums.push([true,false,false,false,,]);
     this.setState({MediaNums:this.state.MediaNums});
};

MedList(){
  var newList=this.state.MediaNums.map((value,index)=>{
      return (
        <View key={index}>
             <View style={styles.startTime}>
                            <Text style={{color:'blue'}}>每日服用</Text>
                            <View style={styles.startTimeCheack}>
                                <TouchableOpacity 
                                    onPress={()=>this.cheackMedia(index,0)}
                                    style={[styles.startTimeCheackItem,{marginLeft:0, backgroundColor:value[0]?'#FE9300':'rgb(244,241,245)',}]}>
                                    <Text style={{color:value[0]?'white':'black',}}>早上</Text>
                                  </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>this.cheackMedia(index,1)}
                                   style={[styles.startTimeCheackItem,{backgroundColor:value[1]?'#FE9300':'rgb(244,241,245)',}]}>
                                   <Text style={{color:value[1]?'white':'black',}}>中午</Text>
                                 </TouchableOpacity>
                                  <TouchableOpacity 
                                    onPress={()=>this.cheackMedia(index,2)}
                                    style={[styles.startTimeCheackItem,{backgroundColor:value[2]?'#FE9300':'rgb(244,241,245)',}]}>
                                    <Text style={{color:value[2]?'white':'black',}}>晚上</Text>
                                  </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>this.cheackMedia(index,3)}
                               style={[styles.startTimeCheackItem,{backgroundColor:value[3]?'#FE9300':'rgb(244,241,245)',}]}>
                                  <Text style={{color:value[3]?'white':'black',}}>睡前</Text>
                                </TouchableOpacity>
                            </View>
                      </View>
                       <View style={styles.FYNums}>
                          <Text style={{flex:1,}}>服用剂量</Text>
                          <View style={styles.addJ}>
                                <TouchableOpacity
                                    onPress={()=>this.minu(index,4)} 
                                    style={styles.quart}>
                                    <Text style={styles.quartTxt}>—</Text>
                                </TouchableOpacity>
                                <View style={{height:30,width:100, justifyContent:'center',alignItems:'center',borderWidth:0,}} >
                                      <TextInput  
                                      style={{fontSize:15,color:'#000000'}} 
                                      placeholder='请输入服用剂量' 
                                      placeholderTextColor='#BFBFBF'
                                      textAlign='center'
                                      keyboardType='numeric'   
                                      value ={value[4]+''}
                                      onChangeText={(txt)=>this.changeTxt(index,4,txt)}/>
                                </View>
                                <TouchableOpacity
                                    style={styles.quart}
                                    onPress={()=>this.add(index,4)} >
                                    <Text  style={styles.quartTxt}>+</Text>
                                 </TouchableOpacity>
                          </View>
                          <Text style={{flex:1,}}> 片/次</Text>
                      </View>
                      <View style={styles.FYNums}>
                          <Text style={{flex:1,}}>服用周期</Text>
                         <View style={styles.addJ}>
                                <TouchableOpacity 
                                    style={styles.quart}
                                    onPress={()=>this.minu(index,5)}>
                                    <Text style={styles.quartTxt}>—</Text>
                                </TouchableOpacity>
                                <View style={{height:30,width:100, justifyContent:'center',alignItems:'center',borderWidth:0,}} >
                                      <TextInput  
                                      style={{fontSize:15,color:'#000000'}} 
                                      placeholder='请输入服用剂量' 
                                      placeholderTextColor='#BFBFBF'
                                      textAlign='center'
                                      keyboardType='numeric'   
                                      value ={value[5]+''} 
                                      onChangeText={(txt)=>this.changeTxt(index,5,txt)}/>
                                </View>
                                <TouchableOpacity 
                                    style={styles.quart}
                                    onPress={()=>this.add(index,5)}>
                                    <Text  style={styles.quartTxt}>+</Text>
                                </TouchableOpacity>
                          </View>
                          <Text style={{flex:1,}}>天</Text>
                      </View>
                      <View style={styles.mDel}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center', flexDirection: 'row',}}>
                                    <TouchableOpacity onPress={()=>this.delPage(index)} style={styles.btnMDel}><Text style={{color:'#FE9300'}}>删除</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={()=>this.addPage()} style={styles.btnMDel}><Text style={{color:'#FE9300'}}>调量</Text></TouchableOpacity>
                            </View>
                      </View>
              </View>
        );

  });
return newList;
};

  render(){
      return  (
            <View style={styles.MainMB}>
                <View style={styles.container}>
                      <View style={styles.title}>
                          <View style={{width:60}}></View>
                          <Text style={styles.txtColor}>{this.props.media['name']}</Text>
                          <TouchableOpacity style={styles.MB}><Text style={{color:'white'}}>模板</Text></TouchableOpacity>
                      </View>
                      <View style={styles.startTime}>
                            <Text style={styles.txtColor}>开始时间</Text>
                            <View style={styles.startTimeCheack}>
                                <TouchableOpacity 
                                    onPress={()=>this.cheackTime('j')}
                                    style={[styles.startTimeCheackItem,{marginLeft:0, backgroundColor:this.state.Cheack[0][1]?'#FE9300':'rgb(244,241,245)',}]}>
                                    <Text style={{color:this.state.Cheack[0][1]?'white':'black',}}>今天</Text>
                                  </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>this.cheackTime('m')}
                                   style={[styles.startTimeCheackItem,{backgroundColor:this.state.Cheack[1][1]?'#FE9300':'rgb(244,241,245)',}]}>
                                   <Text style={{color:this.state.Cheack[1][1]?'white':'black',}}>明天</Text>
                                 </TouchableOpacity>
                                  <TouchableOpacity 
                                    onPress={()=>this.cheackTime('h')}
                                    style={[styles.startTimeCheackItem,{backgroundColor:this.state.Cheack[2][1]?'#FE9300':'rgb(244,241,245)',}]}>
                                    <Text style={{color:this.state.Cheack[2][1]?'white':'black',}}>后天</Text>
                                  </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>this.more()}
                                  style={[styles.startTimeCheackItem,{backgroundColor:'rgb(244,241,245)'}]}>
                                  <Text style={{color:'black'}}>更多</Text>
                                </TouchableOpacity>
                            </View>
                      </View>
                      {this.MedList()}
                </View>
            </View>
        );
  };
};


const styles = StyleSheet.create({
  MainMB:{
      margin:10,
      backgroundColor:'white',
      borderRadius:5,
      borderWidth:1,
      borderColor:'white',
  },
  txtColor:{
    color:'black',
  },
    container:{
     margin:15,
      flex:1,
      flexDirection: 'column',
      marginBottom:15,
    },
    title:{
      flexDirection: 'row',
      borderBottomWidth:1,
      alignItems:'center',
      justifyContent:'space-between',
      paddingBottom:5,
    },
    MB:{
       alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FE9300',
      width:60,
      height:30,
      borderWidth:1,
      borderColor:'white',
      borderRadius:15,
    },
    startTime:{
      flexDirection: 'column',
      borderBottomWidth:1,
      marginTop:15,
    },
    startTimeCheack:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:15,
      marginTop:25,
    },
    FYNums:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:20,
      paddingTop:20,
       borderBottomWidth:1,
       
    },
    addJ:{
      flex:4,
        flexDirection: 'row',
      alignItems:'center',
       justifyContent:'space-around',
    },
    quart:{
        borderWidth:1,
        borderColor:'#FE9300',
        height:20,
        width:20,
        borderRadius:10,
        alignItems:'center',
       justifyContent:'center',
    },
    quartTxt:{
        color:'#FE9300',
        fontSize:18,
    },
    startTimeCheackItem:{
        flex:1,
        height:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#cccccc',
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
    },
    mDel:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:15,
    },
      btnMDel:{
      flex:1,
      borderWidth:1,
      borderColor:'#FE9300',
      borderRadius:12,
      height:25,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:20,
  },
  
});


export default EatMedineItem;
