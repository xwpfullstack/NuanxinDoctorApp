'use strict';

import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles'
import Modal from 'react-native-root-modal';
import BackTitle from './back';



class CaseHistory extends Component {
    constructor(props){
        super(props);
    }

    _NoclassicCase(){
        return(
            <View style={styles.nocase}>
                <Image
                    source={require('../../images/me/casepage.png')}
                    style={{width:100,height:100}}
                />
                <View style={{paddingBottom:5}}>
                    <Text>您暂时没有经典病例,</Text>
                </View>
                <View>
                    <Text>请点击右上方添加按钮添加。</Text>
                </View>
            </View>
        )
    }
  render() {
    return (
        <View>
            <BackTitle
                navigator={this.props.navigator}
                addBtn={true}
                title={'经典病例'} />
                {this._NoclassicCase()}
        </View>
      );
  }
}
export default CaseHistory;
