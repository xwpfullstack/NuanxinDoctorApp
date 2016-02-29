'use strict';

import styles from './styles';

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
                <View style={styles.headNav}>
                    <TouchableOpacity  style={styles.back} onPress= {() => {this.props.navigator.pop()}}>
                        <Image style={styles.headImg}
                        source = {require('../../images/me/back.png')} />
                        <Text style={[styles.textBold,{fontSize:15}]}>返回</Text>
                    </TouchableOpacity>
                    <View style={styles.headMenu}><Text style={styles.textBold}>我的主页</Text></View>
                </View>
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
