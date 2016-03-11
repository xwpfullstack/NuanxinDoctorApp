'use strict'

import React, {
  Alert,
  Component,
  Dimensions,
  TouchableHighlight,
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

let schedule=[

];
let orderData=[
    {date:'2015年9月28日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月28日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月26日', name: '王安琴', state: '已完成'},
    {date:'2015年9月28日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月28日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月28日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月24日', name: '王安琴', state: '已完成'},
    {date:'2015年9月23日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月24日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月22日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月25日', name: '王安琴', state: '已完成'},
    {date:'2015年9月24日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月24日', name: '王安琴', state: '已完成'},
    {date:'2015年9月23日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月24日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月22日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月25日', name: '王安琴', state: '已完成'},
    {date:'2015年9月24日', name: '王琴', state: '患者候诊中'},
];
var json={};
var sectionIDS=[];
var rowIDs=[];

class OrderList extends Component {
  constructor(props) {
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
      data:orderData,
      dataSource:dataSource,
      isLoad:false,
      isSuccess:true,
  };
  }

  showOrderDetails(orderData) {
    this.props.navigator.push({name: 'orderDetails', passProps: orderData});
  }
  componentDidMount(){
     this.BaseCreateData(orderData,'date');
    //  Alert.alert(this.state.data+'');
  }
  BaseCreateData(Datas,name){
        json={};
        sectionIDS=[];
        rowIDs=[];
        for (let data of Datas){
             if (!json[data[name]]) {
                   json[data[name]]={};
                   sectionIDS.push(data[name]);
                   rowIDs.push([]);
              }
              let index;
              for (var i = 0; i < sectionIDS.length; i++) {
                  if (sectionIDS[i] == data[name]) {
                      index=i;
                      break;
                  }
              };
            let  row= (rowIDs[index].length+1)+'';
            rowIDs[index].push(row)
             json[data[name]+':'+row]=data;
        };
        // Alert.alert('', JSON.stringify(json)+'' );
      //  Alert.alert(this.state.data.length+'');
        this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(json,sectionIDS,rowIDs),});
  }
  renderRow(rowdata,sectionID,rowID) {
    let imageSource;
    if (rowdata.state=='预约中') {
      imageSource=require('../../images/schedule/appointing.png');
    }
    else if(rowdata.state=='患者候诊中') {
      imageSource=require('../../images/schedule/waiting.png');
    }
    else {
      imageSource=require('../../images/schedule/done.png');
    }
    return (
      <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.showOrderDetails(orderData)}>
        <View style={styles.listItem}>
          <View style={styles.listItemContent}>
            <View style={styles.listItemName}>
              <Text style={styles.itemNameText}>{orderData.name}</Text>
            </View>
            <Image source={imageSource} style={styles.stateImage}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  renderSectionHeader(sectionData,sectionID){
      var valueData=sectionID.toString();
      var tempList=valueData.split('-');
      if (tempList.length>1) {
          valueData=tempList[0]+'年'+parseInt(tempList[1])+'月'+parseInt(tempList[2].split(' ')[0])+'号';
      }
    return (
        <View style={{justifyContent:'center',padding:10}}>
      <Text style={{color:'#F08300',fontSize:13}}>{valueData}</Text>
      </View>
      );
  };
  render() {
    return (
      <ScrollView>
      <ListView
        style={{backgroundColor:'#AAAAAA'}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={true}
        renderSectionHeader={this.renderSectionHeader}
      />
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	itemText: {
    fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
		fontWeight: '100',
		color: '#FFFFFF',
	},
  listItem: {
    flex: 1,
		backgroundColor: 'rgba(255,255,255,0.4)',
    height: 38,
    paddingLeft: 11,
  },
  listItemContent: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(118,104,103,0.6)',
  },
  listItemName: {

  },
  itemNameText: {
		fontSize: 18,
    fontFamily: 'PingFang-SC-Regular',
		fontWeight: '100',
		color: '#FFFFFF',
  },
  stateImage: {
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    width: 88,
    height: 25,
    marginRight: 11,
  },
});

export default OrderList;
