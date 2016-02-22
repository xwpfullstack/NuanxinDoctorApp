'use strict'

import React, {
  Alert,
  Component,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import MonthBody from './MonthBody';

const DAYDIFF=86400000;
let weekSquence=[
  ['27','28','29','30',' 1',' 2',' 3'],
  [' 4',' 5',' 6',' 7',' 8',' 9','10'],
  ['11','12','13','14','15','16','17'],
  ['18','19','20','21','22','23','24'],
  ['25','26','27','28','29','30','31'],
  [' 1',' 2',' 3',' 4',' 5',' 6',' 7']
];

function initMonthDayData(monthOffset) {
  let today = new Date();
  let monthFirstDay= new Date(today.getFullYear(), today.getMonth() + monthOffset, today.getDate(), 0, 0, 0, 0);
  monthFirstDay.setDate(1);
  let index = monthFirstDay.getDay();
  let pageFirstDay = new Date(monthFirstDay.getTime() - DAYDIFF * index);
  let monthDayData = new Array(6);
  let i = 0;
  let j = 0;
  for (i = 0; i < 6; i++) {
    monthDayData[i]= new Array(7);
  }
  let dayOffset=0;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 7; j++) {
      monthDayData[i][j]=new Date(pageFirstDay.getTime()+DAYDIFF*dayOffset);
      dayOffset++;

    }
  }
  return monthDayData;
}


class CalendarMonth extends Component {
  constructor(props) {
    super(props)
    this.state={
      monthShowed: new Date().getFullYear() + '-' + (new Date().getMonth() + 1),
      monthDayData: initMonthDayData(0),
      offset: 0,
    }
  }

  changeMonth(direct) {
    this.setState({offset: this.state.offset + direct})
    let today=new Date();
    let tmp=new Date(today.getFullYear(), today.getMonth() + this.state.offset, today.getDate(), 0, 0, 0, 0);
    this.state.monthShowed= tmp.getFullYear() + '-' + (tmp.getMonth() + 1);
    this.setState({monthDayData: initMonthDayData(this.state.offset)});

  }

  render() {
    return (

      <TouchableHighlight
        underlayColor='rgba(34,26,38,0.1)'
        onPress={()=>{this.props.changeType('monthly')}}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.changeMonth(-1)}>
            <Text style={styles.switchText}>上一月</Text>
          </TouchableHighlight>
          <Text style={styles.monthShowedText}>{this.state.monthShowed}</Text>

          <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.changeMonth(1)}>
            <Text style={styles.switchText}>下一月</Text>
          </TouchableHighlight>
        </View>

          <MonthBody monthDayData={this.state.monthDayData} />


      </View>

    </TouchableHighlight>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    height: 314,
    flex: 1,
  },
  topBar: {
    padding: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 34,
    backgroundColor: '#FFFFFF'
  },
  switchText: {
    fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
		fontWeight: '100',
		color: '#666666',
  },
  monthShowedText: {
    fontFamily: 'PingFang-SC-Regular',
		fontSize: 16,
		fontWeight: '100',
		color: '#F08300',
  },
  weekdayDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekdayDaysText: {
		fontSize: 16,
		fontWeight: '100',
		color: '#333333',
  },
});

export default CalendarMonth;
