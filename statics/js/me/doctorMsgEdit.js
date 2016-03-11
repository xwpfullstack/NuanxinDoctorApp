'use strict';
import JobView from './jobView'
import JobViewEdit from './jobViewEdit'
import styles from './styles'

import React, {
  Component,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import BackTitle from './back';

class DoctorMsgEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            dctmsg:{},
            worktime:{},
        }
        this.getDoctorData();
    }
    getDoctorData(){
        fetch(DocInfo,{
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
		this.setState({
		    dctmsg:responseData,
            worktime:responseData.worktime
		})
          })
          .catch((err)=>{
              this.setState({isSuccess:false,isLoad:true});
              console.log(err.toString());
          })
          .done();
    }
    render() {
    return (
        <View>
            <BackTitle
                navigator={this.props.navigator}
                title={'编辑资料'}>
            </BackTitle>

            <ScrollView style={styles.ScrollViewBody}>
                <View style={styles.psnInfo}>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>姓名：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}
                            >{this.state.dctmsg.name}
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>年龄：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}
                            >{this.state.dctmsg.age}
                            </TextInput>
                        </View>
                    </View>
                    <View style={[styles.psnInfoLine,{borderBottomWidth:0}]}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>电话：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                keyboardType='numeric'
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.tel}
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.psnInfo}>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>职称：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.title}
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>科室：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.department}
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>医院：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.hospital}
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>价格：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                keyboardType='numeric'
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.price}
                            </TextInput>
                        </View>
                    </View>
                    <View style={[styles.psnInfoLine,{borderBottomWidth:0}]}>
                        <View style={styles.psnInfoLineKey}>
                            <Text style={styles.textStyle}>备注：</Text>
                        </View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                underlineColorAndroid={'transparent'}>
                                {this.state.dctmsg.memo}
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={[styles.psnInfo,{marginBottom:20}]}>
                    <View>
                        <View style={[styles.psnInfoLineValue,{paddingBottom:10,}]}>
                            <JobViewEdit />
                        </View>{/*出诊安排*/}
                    </View>
                </View>
            </ScrollView>
        </View>
      );
    }
}

export default DoctorMsgEdit;
