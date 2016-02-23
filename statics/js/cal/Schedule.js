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

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state={
      calendarType: 'monthly',
    };
  }
  changeType(type) {
    if (type=='weekly'){
      this.setState({calendarType: 'monthly'});
    }
    else if (type=='monthly') {
      this.setState({calendarType: 'weekly'});
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
              <Calendar type={this.state.calendarType}
                changeType={(type)=>{this.changeType(type)}}
              />
            </View>
            <OrderList navigator={this.props.navigator} />
        </Image>
    );
  }
}

const styles=StyleSheet.create({
	backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
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
