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
                
var COLOR=[
    '#DC5947',
    '#6C6CC6',
    '#53AD55',
    '#DC5947',
    '#26BC8F',
    '#E9A737'
];

class ManagerPage extends Component{
  constructor(props){
    super(props);
     var dataSource=new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      });
    this.state={
      diags:this.props.diags,
      dataSource:dataSource.cloneWithRows(this.props.diags),
  };

};


handleBack(){
  this.props.navigator.pop();
};

jumpSelf(data){
  this.props.navigator.push({
      name:'Manager',
      diag:data,
  })
}

renderRow(data){
  var num=Math.ceil(Math.random()*5)
  return(
        <TouchableOpacity onPress={()=>this.jumpSelf(data)} style={styles.touchStyle}>
               <View style={[styles.drugLogo,{backgroundColor:COLOR[num]}]}>
                    <Text style={{fontSize:23,color:'#fff'}}>{data.name[0]}</Text>
              </View>
              <Text style={styles.touchTxt}>{data.name}</Text>
        </TouchableOpacity>
        );
}

  render(){
      return  ( 
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
                        <Text style={[styles.txtColor,{fontSize:15}]}>管理患教</Text>
                        <Text style={[styles.txtColor,{width:50}]}></Text>
                    </View>
                </View>
                <ScrollView>
                    <ListView
                                 initialListSize={this.state.diags.length}
                                 dataSource={this.state.dataSource}
                                 scrollRenderAheadDistance={5}
                                 onEndReachedThreshold={20}
                                 renderRow={(data)=>{return this.renderRow(data);}}/>
              </ScrollView>
              <View style={{height:50}}></View>
          </View>
        </Image>
        );
};
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    height:Dimensions.get('window').height,
  },
  MainMB:{
      margin:10,
   
      backgroundColor:'white',
      borderRadius:5,
      borderWidth:1,
      borderColor:'white',
  },

  touchStyle:{
      height:50,
       flexDirection: 'row',
      borderBottomWidth:1,
      alignItems:'center',
      paddingLeft:10,
  },
  touchTxt:{
      fontSize:15,
      color:'white',
  },

  drugLogo: {
    marginRight:10,
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:'#53AD55',
    alignItems:'center',
    justifyContent:'center'
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
      txtColor:{
        color:'rgb(255,255,255)',
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

});


export default ManagerPage;