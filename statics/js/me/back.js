'use strict';

import React, {
  Component,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import styles from './styles'

class BackTitle extends Component {
  render() {
    return (
        <View style={styles.headNav}>
            <TouchableOpacity
            style={styles.back}
            onPress= {() => {this.props.navigator.pop()}}>
                <Image style={styles.headImg}
                source = {require('../../images/me/back.png')} />
            </TouchableOpacity>
            <View style={styles.headMenu}>
                <Text style={styles.textBold}>{this.props.title}</Text>
            </View>
        </View>
      );
  }
}
export default BackTitle;
