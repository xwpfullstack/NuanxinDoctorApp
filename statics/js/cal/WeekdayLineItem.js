'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class WeekdayLineItem extends Component {
  constructor(props) {
    super(props);
  }

  checkEvents() {

  }

  render() {
    return (
      <TouchableHighlight
        underlayColor = 'rgba(34,26,38,0.1)'
        onPress = {() => {this.checkEvents()}}
        style = {styles.container}
      >
        <Text style={styles.weekdayDaysText}>{this.props.itemDate.getDate()}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
});

export default WeekdayLineItem;
