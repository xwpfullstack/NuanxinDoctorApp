'use strict'

import  React, {
  Alert,
  Animated,
  Component,
  Dimensions,
  Navigator,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  ListView,
} from 'react-native';

import OrderList from './OrderList';
import Calendar from './Calendar';

const {_width,_height}=Dimensions.get('window');

let orderData=[
    {date:'2015年9月28日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月28日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月28日', name: '王安琴', state: '已完成'},
    {date:'2015年9月28日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月28日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月28日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月28日', name: '王安琴', state: '已完成'},
    {date:'2015年9月28日', name: '王琴', state: '患者候诊中'},
    {date:'2015年9月28日', name: '白保成', state: '患者候诊中'},
    {date:'2015年9月28日', name: '石秋雨', state: '预约中'},
    {date:'2015年9月28日', name: '王安琴', state: '已完成'},
    {date:'2015年9月28日', name: '王琴', state: '患者候诊中'}
];

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state={
      calendarType: 'monthly',
    };
  }
  changeType(type) {
    if (type=='weekly'){
      this.setState({calendarType:'monthly'});
    }
    else if (type=='monthly') {
      this.setState({calendarType:'weekly'});
    }
  }

  render() {
    return (
        <Image
          source={require('../../images/load/background.png')}
          style={styles.backgroundImage}
        >
            <View style={styles.title}>
              <Text style={styles.titleText}>日程</Text>
            </View>

            <View style={styles.calendar}>
              <Calendar type={this.state.calendarType} changeType={(type)=>{this.changeType(type)}}/>
            </View>
            <OrderList navigator={this.props.navigator}/>
        </Image>
    );
  }
}

const styles=StyleSheet.create({
	backgroundImage: {
    width:_width,
    height:_height,
    flex:1,
	},
  title: {
    height: 45,
    backgroundColor: '#868181',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FFFFFF',
  },
  calendar: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
  },
});

export default Schedule;
