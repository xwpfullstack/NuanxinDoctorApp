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
                
var DataJson=[
     [ {'id':1,'name':'睡眠行为障碍'},
      {'id':2,'name':'抑郁状态'}],
      [{'id':3,'name':'帕金森'},
      {'id':4,'name':'颠簸'}],
      [{'id':5,'name':'脑血管病'},
      {'id':6,'name':'不安腿综合症'}],
      [{'id':7,'name':'运动神经元病'},
      {'id':8,'name':'失眠'}],
      [{'id':9,'name':'神经衰弱'},
      {'id':10,'name':'阿尔茨海默'}],
      [{'id':11,'name':'焦虑状态'},
      {'id':12,'name':'神经症'}],
      [{'id':13,'name':'发作性睡病'},
      ],
  ];

var ischeack=[<Text></Text>,<Text></Text>];
class Diagnose extends Component{
  constructor(){
    super();
    var dataSource=new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }); 
    for (var i = 1 ; i <= DataJson.length*2; i++) {
      ischeack[i]=false;
    };
    this.state={
      dataSource:dataSource.cloneWithRows(DataJson),
      isLoad:true,
      isCheack:ischeack,
  };
};
handleCheack(Msg){    
    if (ischeack[Msg['id']] === false) {
        ischeack[Msg['id']] =true;
         this.props.changeMedia(Msg,false);
    }
    else{
        ischeack[Msg['id']] =false;
         this.props.changeMedia(Msg,true);
    }
     this.setState({isCheack:ischeack});
};

addDiannosis(){
    this.props.navigator.push({
          name:'addDianosis',
    });
};

dSubmit(){
      this.props.gotoPage(1);

  };
  render(){
    if (this.state.isLoad) {
      var ListContent=DataJson.map((data,index)=>{
        var temp;
        if (data[1]) {
          temp= <TouchableOpacity 
                activeOpacity={1}
                onPress={()=>this.handleCheack(data[1])} 
                style={[styles.rowData,{marginRight:20,backgroundColor:this.state.isCheack[data[1]['id']]?'#FE9300':'rgb(244,241,245)'}]}>
                <Text style={[styles.rowDataText,{color:this.state.isCheack[data[1]['id']]?'white':'black'}]}>
                  {data[1]['name']}
                </Text>
              </TouchableOpacity>;
        }
        else{
            temp= <TouchableOpacity 
                
                style={[styles.rowData,{marginRight:20,backgroundColor:'rgba(0,0,0,0)',borderWidth:0,}]}>
                <Text style={[styles.rowDataText]}>
                </Text>
              </TouchableOpacity>;
        }

        return (
          <View key={data[0]['id']} style={styles.row}>
              <TouchableOpacity 
              activeOpacity={1}
              onPress={()=>this.handleCheack(data[0])} 
              style={[styles.rowData,{backgroundColor:this.state.isCheack[data[0]['id']]?'#FE9300':'rgb(244,241,245)'}]}>
                  <Text style={[styles.rowDataText,{color:this.state.isCheack[data[0]['id']]?'white':'black'}]}>{data[0]['name']}</Text>
              </TouchableOpacity>
              {temp}
          </View>
          );
      });
      return  (
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.MainMB}>
                <View style={{marginTop:20,}}>
                      <View style={{flex:1,flexDirection: 'column',marginBottom:15,}}>
                            {ListContent}
                      </View>
                </View>
            </View>
            <View style={styles.Submit}>
                    <TouchableOpacity onPress={()=>this.addDiannosis()} style={styles.submitContent}><Text style={styles.txtSubStyle}>添加诊断</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.dSubmit()} style={[styles.submitContent,{marginRight:50,}]}><Text style={styles.txtSubStyle}>提交</Text></TouchableOpacity>
            </View>
            </ScrollView>
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
    borderColor:'#cccccc',
  },
  rowDataText:{
    textAlign:'center',
  },

});


export default Diagnose;