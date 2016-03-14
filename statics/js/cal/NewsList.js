'use strict'

import React, {
  Alert,
  ToastAndroid,
  Component,
  ListView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../patient/Loading';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1, row2)=>row1 !== row2,
    });
    this.state={
      data:[],
      isLoad:false,
      isSuccess:true,
    };
  }
  componentDidMount(){
    this.postData();
    //  Alert.alert(this.state.data+'');
  }
  postData(){
    // Alert.alert('',this.props.orderData.sn+'');
    this.setState({isLoad:false});
      // Alert.alert('fetch');
      fetch(GetNewsList_URL,{
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 doctorId: this.props.doctorId
              })
        })
        .then((response) => {
            // Alert.alert('', 'response');
             return response.json();
        })
        .then((responseData)=>{
          // console.log(responseData);
          this.setState({isLoad:true, data:responseData,isSuccess:true,})
          // Alert.alert('',JSON.stringify(responseData));

        })
        .catch((err)=>{
            Alert.alert('catch error',err.toString())
            this.setState({isSuccess:false,isLoad:true});
            // console.log(err.toString());
        })
        .done();
  };

  deleteNews(case_id) {
    // this.props.deleteData(this.props.recordData.date, medcine);
    // Alert.alert('', 'case_id:'+case_id);
    Alert.alert(
      '提示',
      '确定要删除订单吗？',
      [
        {text: '确定',onPress:() => {this.postDeleteId(case_id)}},
        {text: '取消',onPress:() => {}},
      ]
    );
  }

  postDeleteId(case_id) {
      fetch(DelNews_URL,{
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 newsId:case_id
              })
        })
        .then((response) => {
            // Alert.alert('', 'response');
             return response.json();
        })
        .then((responseData)=>{
          // console.log(responseData);
          // this.setState({data:responseData.records})
          if (responseData.status==='success') {
            this.postData();
          }
          else {
            ToastAndroid.show('删除失败，请重试。', ToastAndroid.LONG);
          }
          // Alert.alert('',JSON.stringify(responseData));
        })
        .catch((err)=>{
            ToastAndroid.show(err.toString(), ToastAndroid.LONG);
        })
        .done();
  }


  showNewsDetails(newsData) {
    this.props.navigator.push({name: 'newsDetails', passProps: newsData, deleteNews:this.deleteNews.bind(this)});
  }
  getDate(timeString) {
    // Alert.alert(timeString.substr(0,10));
    let tmp=timeString.substr(0,10).split('-');
    // Alert.alert('',tmp[0]+' '+tmp[1]+' '+tmp[2]);
    return tmp[0]+'年'+tmp[1]+'月'+tmp[2]+'日';
  }
  renderRow(
    newsData: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
              // Alert.alert('',JSON.stringify(newsData));
    return (
      <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.showNewsDetails(newsData)}>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{newsData.fields.title}</Text>
          <Text style={styles.itemText}>{this.getDate(newsData.fields.ctime)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  renderScrollComponent(){
      return <ScrollView></ScrollView>
  };
  render() {
    if (this.state.isLoad) {
      if (this.state.isSuccess) {
        return (
          <ListView
            dataSource={this.dataSource.cloneWithRows(this.state.data)}
            renderRow={this.renderRow.bind(this)}
            automaticallyAdjustContentInsets={true}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps={true}
            showsVerticalScrollIndicator={true}
            renderScrollComponent={()=>{return this.renderScrollComponent()}}
          />
        );
      } else{
          return (

               <View
                    style={{flex:1,
                                width:Dimensions.get('window').width,
                                flexDirection: 'column',alignItems: 'center',justifyContent: 'center',}}>
                    <Text style={{color:'#F08300',fontSize:16,}}>加载失败</Text>
                    <TouchableOpacity onPress={()=>this.postData()}
                            style={{borderWidth:1,height:50,width:100,borderRadius:25,borderColor:'#0094ff',justifyContent:'center',alignItems:'center'}}>
                           <Text style={{color:'#F08300',fontSize:16,}}>重新加载</Text>
                    </TouchableOpacity>
              </View>
          );
        };
    }
    else{
        return (
                  <Loading />
          );
    };
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(118,104,103,0.6)',
  },
  itemText: {
    fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    lineHeight: 20,
		fontWeight: '100',
		color: '#333333',
  },
});

export default NewsList;
