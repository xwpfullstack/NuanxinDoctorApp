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
  ProgressBarAndroid,
} from 'react-native';

var json={
  '2013-02-01':{},
  '2013-02-01:1':{'id':2,'name':'张三','jb':'duoliang'},
  '2013-02-01:2':{'id':3,'name':'李四','jb':'duoliang'},
   '2013-02-01:3':{'id':4,'name':'王五','jb':'duoliang'},
  '2013-02-02':{},
  '2013-02-02:1':{'id':5,'name':'王某某','jb':'duoliang'},
  '2013-02-02:2':{'id':6,'name':'李某','jb':'duoliang'},
   '2013-02-02:3':{'id':7,'name':'张某','jb':'duoliang'},
    '2013-02-03':{},
  '2013-02-03:1':{'id':8,'name':'zhansan','jb':'duoliang'},
  '2013-02-03:2':{'id':9,'name':'zhansan','jb':'duoliang'},
   '2013-02-03:3':{'id':10,'name':'zhansan','jb':'duoliang'},
};
var sectionIDS=[
'2013-02-01',
'2013-02-02',
 '2013-02-03',
];
var rowIDs=[
['1','2','3'],['1','2','3'],['1','2','3'],
];

class MainList extends Component{
  constructor(){
    super();

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
      dataSource:dataSource.cloneWithRowsAndSections(json,sectionIDS,rowIDs),
      isLoad:true,
  };
    //this.props.changeNums(json.length-sectionIDS.length);
}

handlePatient(rowdata){
  this.props.closeModal();
  this.props.navigator.push({
    name:'self',
    id:rowdata['id'],
  });
};
  renderRow(rowdata,sectionID,rowID){
    return (
    <TouchableOpacity onPress={(rowdata)=>this.handlePatient(rowdata)}>
        <View style={styles.item}>
            <View style={styles.itemImage}>
              <Image 
                source={require('../../images/load/kobe.jpg')}
                style={styles.image} />
            </View>

            <View style={styles.itemContent}>
              <Text style={styles.itemHeader}>{rowdata.name}</Text>
              <View style={styles.jump}>
              <Text style={styles.redText}>
                {rowdata.jb}
              </Text>
                 <Image 
                source={require('../../images/load/jump.png')} style={{borderWidth:1}}/>
              </View>
            </View>
      </View>
   </TouchableOpacity>
      );
    
  };
  renderSectionHeader(sectionData,sectionID){
    return (
        <View style={{justifyContent:'center',padding:10}}>
      <Text style={{color:'#F08300',fontSize:13}}>{sectionID.toString()}</Text>
      </View>
      );
  };

  _renderFooter(){
      return <View style={{height:50}}></View>
  };
  _renderScrollComponent(){
      return <ScrollView></ScrollView>
  };
  render(){
      if (this.state.isLoad === true) {
           return (
                    <ScrollView style={{height:Dimensions.get('window').height-185,}}>
                            <ListView
                                            ref="listview"
                                            style={styles.listview}
                                            dataSource={this.state.dataSource}
                                            renderRow={(data)=>{return this.renderRow(data);}}
                                            onEndReached={this.onEndReached}
                                            renderSectionHeader={this.renderSectionHeader}
                                            automaticallyAdjustContentInsets={false}
                                            keyboardDismissMode="on-drag"
                                            keyboardShouldPersistTaps={true}
                                            showsVerticalScrollIndicator={false}
                                            renderScrollComponent={()=>{return this._renderScrollComponent()}} />
                    </ScrollView>
            );
      }
      else{
          return (
                  <View style={{height:Dimensions.get('window').height-185, width:Dimensions.get('window').width,flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
                          <ProgressBarAndroid />
                          <Text style={{color:'#F08300',fontSize:16,}}>加载中.....</Text>
                  </View>
            );
      }
     
      
  };
};

const styles = StyleSheet.create({
  jump:{
    flexDirection: 'row',
    flex:2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  outItem:{
     backgroundColor: 'rgba(255,255,255,0.4)',
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
   // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 74,
    borderBottomWidth: 1,
     //backgroundColor: 'RGB(118, 104, 103)',
    borderColor: 'rgba(118, 104, 103, 0.6)',
  },
  itemHeader: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 18,
    flex:3,
    fontWeight: '300',
    color: '#ffffff',
  },
  redText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 14,
   alignSelf:'center',
    fontWeight: '300',
    color: '#f5f5f5',
  },
  listview:{

  },
});


export default MainList;