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
  TouchableOpacity,
  ScrollView,
  ToolbarAndroid,
} from 'react-native';

var toolbarActions = [
  {title: '排序', show: 'always'},
  {title: '夜间模式', show: 'never'},
  {title: '设置选项', show: 'never'},
];


class Head extends Component{
  constructor(){
    super();
};
  render(){
    return  (
      <View style={styles.container}>
                  <View style={styles.titleSearch}>
                    <View style={styles.titleSNav}>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={require('../../images/load/search.png')}  style={{height:18,width:18,margin:5,}}/>
                      <View style={{height:30,width:200, justifyContent:'center',}} >
                      <TextInput  style={{fontSize:14,color:'#ffffff'}} placeholder='按姓名或电话号码搜索' placeholderTextColor='#ffffff'   />
                      </View>
                    </View>
                    </View>
                  </View>

                

                
                    <View style={styles.title}>
                      <View style={{padding:10,flexDirection: 'row',}}>
                        <Text style={[styles.textColor,{fontSize:14,flex:6,}]}>今日有3名患者关注</Text>
                        <View style={styles.titleBtn}>
                        <Text style={[styles.textColor,{fontSize:14,flex:2}]}>排序</Text>
                        <Image source={require('../../images/load/sort.png')}  style={{height:18,width:13,flex:1,}}/>
                        </View>         
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
  },
  titleSearch:{
    height:41,
      flex:1,
     justifyContent:'center',
  },
    titleSNav:{
      height:31,
      borderRadius:3,
      margin:10,
       backgroundColor: 'rgba(255,255,255,0.4)',
       justifyContent:'center',
  },
    title:{
      flex:1,
      backgroundColor:'#F08300',
      height:30,
       justifyContent:'center',
      
  },
  titleBtn:{
      flex:1,
      flexDirection: 'row',
      marginRight: 16,
      justifyContent:'flex-start'
  },
   textColor:{
     color:'#ffffff',
     fontFamily: 'PingFang-SC-Regular',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height:74,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  outItem:{
     backgroundColor: 'rgba(255,255,255,0.1)',
  },
  image: {
    width: 56,
    height: 56,
    margin: 10,
    borderRadius: 28
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 74,
    borderBottomWidth: 1,
    borderColor: 'rgba(100,53, 201, 0.4)',
  },
  itemHeader: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 18,
    fontWeight: '300',
    color: '#ffffff',
  },
  redText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 14,
    fontWeight: '300',
    color: '#f5f5f5',
  },
    toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
});


export default Head;