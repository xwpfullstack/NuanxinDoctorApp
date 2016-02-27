'use strict'

import React, {
  Alert,
  Component,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import OrderList from '../cal/OrderList';

class OrderListIso extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.listHeader}>
         <Text style={styles.listHeaderText}>订单列表</Text>
        </View>
        <OrderList navigator={this.props.navigator} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
	},
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
});

export default OrderListIso;
