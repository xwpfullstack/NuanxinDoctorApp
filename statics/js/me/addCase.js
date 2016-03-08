'use strict';

import React, {
  Component,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import BackTitle from './back';
import styles from './styles';

class AddCase extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <View>
            <BackTitle title={'添加病例'}
                navigator = {this.props.navigator} />
        </View>
        );
  }
}
export default AddCase;
