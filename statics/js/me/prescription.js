'use strict';
import styles from './styles';
import DrugList from './drugList';
import BackTitle from './back';

import React, {
  Component,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

var WINDOW_HEIGHT = Dimensions.get('window').height;

class Prescription extends Component {
  render() {
    return (
        <View>
            <BackTitle title={'wodeyaofang'} navigator = {this.props.navigator} />
            <ScrollView style={{height:WINDOW_HEIGHT-70}}>
                <DrugList navigator={this.props.navigator}/>
            </ScrollView>
        </View>

      );
  }
}
export default Prescription;
