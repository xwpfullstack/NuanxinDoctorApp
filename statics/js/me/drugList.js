'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ListView,
  Image,
  WebView,
  Text,
  View,
  Dimensions,
} from 'react-native';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var WORD=70;
var COLOR=[
    '#DC5947',
    '#6C6CC6',
    '#53AD55',
    '#DC5947',
    '#26BC8F',
    '#E9A737'
];

function GetRandomNum(Min,Max)
{
var Range = Max - Min;
var Rand = Math.random();
return(Min + Math.round(Rand * Range));
}

var num = GetRandomNum(1,3);

var tempData={
        A:['奥斯平','艾弗森','艾克'],
        B:['巴基斯坦','巴拿马','巴勒斯坦'],
        C:['朝鲜','查尔斯','查案'],
        S:['森海塞尔','舒尔'],
        Z:['中国','众泰','中兴']
    };
var json={

};  //列表对象
var sectionIDS=[];
var rowIDs=[];

class DrugList extends Component {
  constructor(props){
      super(props);

      var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
       }
       //组合json中的key
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

};

componentWillMount(){
     this.BaseCreateData();
};
_onPressDrugBtn(rowdata){
    this.props.navigator.push({
        name:'drugDetailed',
        drugName:rowdata,
    });
};


BaseCreateData(){
      json={};
      sectionIDS=[];
      rowIDs=[];
      for (let key in tempData){
          sectionIDS.push(key);
          json[key]='';
          let tempSecItem=tempData[key].map((value,index) => {
              json[key+':'+(index+'')]=value;
              return index+'';
          });
          rowIDs.push(tempSecItem);
      }

      this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(json,sectionIDS,rowIDs),});
};
renderRow(rowdata,sectionID,rowID){
    var num=Math.ceil(Math.random()*5)
  return (
      <TouchableOpacity
          onPress={(rowdata)=>this._onPressDrugBtn(rowdata)}
          style={styles.drugTouch}>
        <View style={styles.drugLine}>
            <View style={[styles.drugLogo,{backgroundColor:COLOR[num]}]}>
                <Text style={{fontSize:23,color:'#fff'}}>{rowdata[0]}</Text>
            </View>
            <View><Text style={{fontSize:18, color:'#000'}}>{rowdata}</Text></View>
        </View>
      </TouchableOpacity>
    );

};

renderSectionHeader(sectionData,sectionID){
  return (
    <View style={{backgroundColor:'#F0F0F0',paddingLeft:5,}}><Text>{sectionID}</Text></View>
    );
};

_renderScrollComponent(){
    return <ScrollView></ScrollView>
};


  render() {
    return (
        <ScrollView style={{height:WINDOW_HEIGHT-70}}>
        <ListView
            ref="listview"
            style={styles.listview}
            initialListSize={9}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headNav: {
    height:45,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#878181',
  },
  ScrollViewBody: {
    height:WINDOW_HEIGHT-120,
},
drugTouch: {
    paddingLeft:10,
    paddingRight:10,
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
drugLine: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingTop:5,
    paddingBottom:5,
    borderBottomWidth:1,
    borderColor:'#EEEEEE',
},

});


export default DrugList;
