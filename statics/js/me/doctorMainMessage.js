'use strict';
/*my own module*/
import DoctorInfo from './doctorInfo';
import DoctorMsgEdit from './doctorMsgEdit';
import styles from './styles';

import React, {
        Component,
        View,
} from 'react-native';


class DoctorMainMessage extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            editShow:false
        };
    }
    changeEditShow() {
        this.setState({
            editShow:!this.state.editShow
        })
    };
  render() {
      if(this.state.editShow){
          return (
            <View style={styles.body}><DoctorMsgEdit changeEditShow = {() => {this.changeEditShow()}}/></View>
            );
      }
      else{
          return(
             <View style={styles.body}><DoctorInfo navigator={this.props.navigator} changeEditShow = {() => {this.changeEditShow()}}/></View>
          );
      }
  }
}

export default DoctorMainMessage;
