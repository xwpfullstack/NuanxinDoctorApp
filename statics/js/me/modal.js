/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-root-modal';

var {WINDOW_HEIGHT,WINDOW_WIDTH} = Dimensions.get('window');

class MyModal extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }
    showModal = ()=> {
        this.setState({
            visible: true
        });
    };
    hideModal = ()=> {
        this.setState({
            visible: false
        });
    };
    _onPressWebButton() {
        this.props.navigator.push({
            name:'webMainPage',
        })
    };
    _onPressPrescriptionBtn() {
        this.props.navigator.push({
            name:'prescription',
        })
    }
  render() {
    return (
        <View>
            {/*button*/}
            <TouchableOpacity style={styles.doctorMessage} onPress={this.showModal}>
              <View style={styles.myqrcode}>
                  <Image
                      style={styles.avatarImg}
                      source = {require('../../images/me/myqrcode.png')}>
                  </Image>
                <Text>我的二维码</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.doctorMessage,{marginTop:0}]}
                onPress={()=>{return this._onPressWebButton()}}>
              <View style={styles.myqrcode}>
                  <Image
                      style={styles.avatarImg}
                      source = {require('../../images/me/homepage.png')}>
                  </Image>
                <Text>我的个人主页</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.doctorMessage,{marginTop:0}]}
              onPress={()=>{return this._onPressPrescriptionBtn()}}>

              <View style={styles.myqrcode}>
                  <Image
                      style={styles.avatarImg}
                      source = {require('../../images/me/price.png')}>
                  </Image>
                <Text>我的处方</Text>
              </View>
            </TouchableOpacity>

            <Modal visible={this.state.visible}>
                <TouchableOpacity onPress={this.hideModal}>
                    <View style={styles.modalContainer}>
                        <Image source={require('../../images/me/erweima.png')} style={{width:200, height:200, margin:20}} />
                        <View style={{paddingBottom:30}}><Text>扫一扫二维码关注{this.props.name}医生</Text></View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

      );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:10,
        alignItems: 'center',
    },
    button: {
        flex: 0.3,
        borderRadius:5,
        backgroundColor:'#63B8FF',
        marginTop:30,
        height:35,
        marginLeft:20,
        marginRight:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doctorMessage: {
        flexDirection:'row',
        backgroundColor:'#fff',
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'#E6E6E6',
        paddingBottom:10,
        paddingTop:10,
        alignItems:'stretch',
        paddingLeft:10,
        marginTop:10
    },
    messageImg: {
        alignItems:'stretch',
        marginRight:10,
    },
    myqrcode: {
        flexDirection:'row',
        alignItems:'center',
    },
    codeIcon: {
        width:100,
        height:100,
    },
    avatarImg: {
        alignItems:'stretch',
        marginRight:10,
    },
    modal: {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        overflow: 'hidden'
    },
    codeTitle: {
        left:10,
        top:20,
        flexDirection:'row',
        marginBottom:20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width:WINDOW_WIDTH * 0.7,
        alignItems: 'center',
        height:WINDOW_HEIGHT * 0.6,
    },
    text: {
        color: '#fff'
    }
});
export default MyModal;
