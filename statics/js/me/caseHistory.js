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
        <View>
            <BackTitle navigator={this.props.navigator} title={'经典病例'} />
            
        </View>
      );
  }
}
export default CaseHistory;
