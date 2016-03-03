'use strict';

import React, {
  Component,
  Text,
  View,
} from 'react-native';

import styles from './styles'
import Modal from 'react-native-root-modal';
import BackTitle from './back'

class CaseHistory extends Component {
  render() {
    return (
        <View style={styles.headNav}>
            <BackTitle navigator={this.props.navigator} title={'haha'} />
        </View>
      );
  }
}
export default CaseHistory;
