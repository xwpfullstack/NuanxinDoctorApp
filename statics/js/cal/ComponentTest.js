'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native';
import Modal from 'react-native-root-modal';
class NAME extends Component {
  constructor(){
    super();
    this.state={
        isLoad:true,
    };
};

  render() {
    return (
      <View >


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoModal: {

  },
});

export default NAME;
