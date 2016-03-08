'use strict';

import styles from './styles';
import BackTitle from './back';

import React, {
    Component,
    TouchableOpacity,
    Image,
    WebView,
    Text,
    View,

} from 'react-native';
var DEFAULT_URL = 'https://www.baidu.com';

class WebMainPage extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <BackTitle
                    navigator={this.props.navigator}
                    title={'我的主页'}>
                </BackTitle>
                <WebView
                    source={{uri:DEFAULT_URL}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaSvriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}

export default WebMainPage;
