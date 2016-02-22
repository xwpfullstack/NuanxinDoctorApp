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
    {date:'2015年9月22日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月24日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月23日', name: '王安琴', state: '已完成'},
    {date:'2015年9月26日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月27日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月24日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月22日', name: '王安琴', state: '已完成'},
    {date:'2015年9月24日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月22日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月24日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月24日', name: '王安琴', state: '已完成'},
    {date:'2015年9月26日', name: '王琴', state: '患者候诊中'}
];

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1, row2)=>row1 !== row2,
    });
}

  renderHeader() {
    return (
      <View style={styles.listHeader}>
       <Text style={styles.listHeaderText}>订单列表</Text>
      </View>
    );
  }
  showOrderDetails(orderData) {
    this.props.navigator.push({name: 'orderDetails', passProps: orderData});
  }
  renderRow(
    orderData: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    let imageSource;
    if (orderData.state=='预约中') {
      imageSource=require('../../images/schedule/appointing.png');
    }
    else if(orderData.state=='患者候诊中') {
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

  _renderScrollComponent(){
      return <ScrollView></ScrollView>
  };
  render() {
    return (
      <ScrollView style={{height:Dimensions.get('window').height-305,}}>
        <ListView
          dataSource={this.dataSource.cloneWithRows(orderData)}
          renderRow={this.renderRow.bind(this)}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={true}
          renderHeader={this.renderHeader}
          renderScrollComponent={()=>{return this._renderScrollComponent()}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: '#F08300',
    justifyContent: 'center',
    height: 30,
  },
  listHeaderText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 14,
		fontWeight: '100',
    color: '#FFFFFF',
    marginLeft: 11,
  },
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
    borderBottomColor: 'rgba(51,51,51,0.2)',
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
