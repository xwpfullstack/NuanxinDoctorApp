'use strict';
import styles from './styles';
import DrugList from './drugList';

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

var COLOR=['#DC5947','#6C6CC6','#53AD55','#DC5947',];

var WINDOW_HEIGHT = Dimensions.get('window').height;

class Prescription extends Component {
  render() {
    return (
        <View>
            <View style={styles.headNav}>
                <TouchableOpacity
                style={styles.back}
                onPress= {() => {this.props.navigator.pop()}}>
                    <Image style={styles.headImg}
                    source = {require('../../images/me/back.png')} />
                </TouchableOpacity>
                <View style={styles.headMenu}><Text style={styles.textBold}>我的药方</Text></View>
            </View>
            <ScrollView style={{height:WINDOW_HEIGHT-70}}>
                <DrugList navigator={this.props.navigator}/>
            </ScrollView>
        </View>

      );
  }
}
export default Prescription;
