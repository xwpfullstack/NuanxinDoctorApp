'use strict';
import JobView from './jobView.js'
import MyModal from './modal.js';
import styles from './styles';
import WebMainPage from './webView'
import MenuModal from './menuModal'
import Modal from 'react-native-root-modal'

import React, {
  Component,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var Doctor_Message = [
  {name: '李宁', age: '40', title:'主治医师', hospital:'齐鲁医院', department:'神经内科',
  tel:'12312312311',memo:'周日休息，不接待患者,有任何问题可以转到下周安排，及时通告患者，谢谢合作。',
  price:49},
];
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var dctmsg = Doctor_Message[0];

class DoctorInfo extends Component {
    constructor(){
        super();
        this.state={
            ListMenu:false,
            modalStyle:{},
            modalContent:{},
        }
    }
    _onPressEditButton(){
        this.props.navigator.push({
            name:'doctorMsgEdit',
        })
    };
    closeModal(){
         this.setState({ListMenu:false});
    };

    _MenuModal() {
        this.setState({
            ListMenu:true,
            modalStyle:{
                position: 'absolute',
                right:0,
                top:45,
                height:100,
                width:100,
                backgroundColor:'rgba(134,129,129,1)',
            },
            modalContent:<MenuModal
                close={()=>this.closeModal()}
                navigator={this.props.navigator}
                name='menuModal'/>,
        });
    };

    _CodeModal() {
        this.setState({
            ListMenu:true,
            modalStyle:{
                position: 'absolute',
                left:0,
                right:0,
                top:0,
                bottom:0,
                backgroundColor:'rgba(0,0,0,0.3)',
            },
            modalContent:<MenuModal
                close={()=>this.closeModal()}
                navigator={this.props.navigator}
                dcrname={dctmsg.name} name='codeModal'/>,
                });
    };

    _JobModal() {
        this.setState({
            ListMenu:true,
            modalStyle:{
                position: 'absolute',
                left:0,
                right:0,
                top:0,
                bottom:0,
                backgroundColor:'rgba(0,0,0,0.3)',
            },
            modalContent:<MenuModal
                close={()=>this.closeModal()}
                navigator={this.props.navigator}
                dcrname={dctmsg.name} name='codeModal'/>,
                });
    }

    postData(){
        fetch(Apppatlist_URL,{
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   doctor_id:this.props.doctorId
                })
          })
          .then((response) => {
               return response.json();
          })
          .then((responseData)=>{
            console.log(responseData);
                this.setState({isLoad:true,mainListData:responseData.patients, data:responseData.patients,isSuccess:true,diags:responseData.diags,})
          })
          .catch((err)=>{
              this.setState({isSuccess:false,isLoad:true});
              console.log(err.toString());
          })
          .done();
    };


    showModal(name) {
        if(!this.state.ListMenu) {
            switch (name) {
                case 'ShowMenu':
                    this._MenuModal();
                    break;
                case 'ShowCode':
                    this._CodeModal();
                    break;
                case 'ShowJobview':
                    this._JobModal();
                    break;
            }
        }
        else
            this.setState({ListMenu:false});
    }
    render() {
    return (
        <View>
            <View style={styles.headNav}>
                <View style={[styles.lineCenter,{flex:10,justifyContent:'flex-end'}]}>
                    <Text style={styles.textBold}>我</Text>
                </View>
                <View style={{flex:9}}>
                    <TouchableOpacity
                        style={styles.headImg}
                        onPress= {()=>this.showModal('ShowMenu')}>
                        <Image source = {require('../../images/me/edit.png')} />
                    </TouchableOpacity>
                </View>

            </View>



            <ScrollView style={styles.ScrollViewBody}>
            {/*headerImage start*/}
                <Image
                    source = {require('../../images/me/bg-11.png')}
                    style = {styles.picture}
                    resizeMode='stretch'>
                    <View style={styles.avatarMSG}>
                        <View style = {styles.avatarImage}>
                            <Image
                                style={styles.avatarImg}
                                source = {require('../../images/me/touxiang.jpg')}>
                            </Image>
                            <View style={styles.imageText}>
                                <Text style={{color:'#fff', fontSize:11}}>已认证</Text>
                            </View>
                        </View>
                        <View><Text style={styles.textBold}>{dctmsg.name}</Text></View>
                        <View><Text style={{color:'#fff'}}>{dctmsg.title}</Text></View>
                    </View>
                </Image>
                {/*headerImage end*/}

                {/*doctorMessage start*/}
                <View style={styles.doctorMessage}>
                    <View style = {styles.messageLable}>
                        <Image
                            source = {require('../../images/me/age.png')}
                            style = {styles.messageImg} />
                        <View style={{paddingRight:5}}><Text style= {{fontSize:14}}>年龄:</Text></View>
                        <View><Text style= {{fontSize:14}}>{dctmsg.age}岁</Text></View>
                    </View>
                    <View style = {styles.messageLable}>
                        <Image
                            source = {require('../../images/me/phone.png')}
                            style = {styles.messageImg} />
                        <View style={{paddingRight:5}}><Text style= {{fontSize:14}}>电话:</Text></View>
                        <View><Text style= {{fontSize:14}}>{dctmsg.tel}</Text></View>
                    </View>
                </View>

                <View style={styles.doctorMessage}>
                    <View style = {styles.messageLable}>
                        <Image
                            source = {require('../../images/me/hospital.png')}
                            style = {styles.messageImg} />
                        <View style={{paddingRight:5}}>
                            <Text style= {{fontSize:14}}>医院:</Text>
                        </View>
                        <View>
                            <Text style= {{fontSize:14}}>{dctmsg.hospital}</Text>
                        </View>
                    </View>
                    <View style = {styles.messageLable}>
                        <Image
                            source = {require('../../images/me/department.png')}
                            style = {styles.messageImg} />
                        <View style={{paddingRight:5}}><Text style= {{fontSize:14}}>科室:</Text></View>
                        <View><Text style= {{fontSize:14}}>{dctmsg.department}</Text></View>
                    </View>
                </View>

                <View style={styles.doctorMessage}>
                    <View style = {styles.messageLable}>
                        <Image
                            source = {require('../../images/me/price.png')}
                            style = {styles.messageImg} />
                        <View style={{paddingRight:5}}>
                            <Text style= {{fontSize:14}}>咨询价格:</Text>
                        </View>
                        <View><Text style= {{fontSize:14}}>{dctmsg.price}元 / 10分钟</Text></View>
                    </View>
                </View>
                {/*doctorMessage end*/}

                {/*<View>
                    <JobView />
                    <View style={styles.memo}>
                        <Text>备注：{dctmsg.memo}</Text>
                    </View>
                </View>*/}


                <MyModal
                    navigator={this.props.navigator}
                    showModal = {(name)=> this.showModal(name)}
                    closeModal={()=>this.closeModal()}
                />

                {/*my homepage*/}
                </ScrollView>

                <Modal visible={this.state.ListMenu}
                    style={styles.infoModal}>
                    <TouchableOpacity onPress={()=>this.closeModal()}
                        style={styles.touchExit}>
                        <View style={this.state.modalStyle}>
                            {this.state.modalContent}
                        </View>
                    </TouchableOpacity>
                </Modal>
        </View>

      );
    }
}

export default DoctorInfo;
