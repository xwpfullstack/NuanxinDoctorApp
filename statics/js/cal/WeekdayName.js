'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const WEEKDAY=['日','一','二','三','四','五','六'];

class WeekdayName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let i = 0;
    let names = [];
    for (i = 0; i < 7; i++) {
      names.push(<Text style={styles.weekdayNameText}>{WEEKDAY[i]}</Text>);
    }
    return (
      <View style={styles.weekdayName}>
        {names}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weekdayName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekdayNameText: {
    fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
		fontWeight: '100',
		color: '#666666',
  },
});

export default WeekdayName;
