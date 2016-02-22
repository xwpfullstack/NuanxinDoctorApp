'use strict'

import React,{
  View,
  Image,
  Text,
  Component,
  StyleSheet,
} from 'react-native';

import Index from "../patient/Index"

class DoctorMainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Index navigator={this.props.navigator} />
    )
  }
}

export default DoctorMainScreen;
