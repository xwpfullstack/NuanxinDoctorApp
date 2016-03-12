'use strict';

import React, {
  Component,
  Text,
  ScrollView,
  Image,
  View,
} from 'react-native';

import BackTitle from './back';
import styles from './styles';
import CaseView from './caseView';

class AddCase extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <View>
            <BackTitle title={'添加病例'}
                navigator = {this.props.navigator} />
            <ScrollView style={styles.ScrollViewBody}>
                <CaseView navigator={this.props.navigator}/>
            </ScrollView>
        </View>
        );
  }
}
export default AddCase;
