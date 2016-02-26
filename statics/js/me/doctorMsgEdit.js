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

class DoctorMsgEdit extends Component {
    render() {
    return (
        <View>
            <View style={styles.headNav}>
                <TouchableOpacity
                style={styles.back}
                onPress= {() => {this.props.navigator.pop()}}>
                    <Image style={styles.headImg}
                    source = {require('../../images/me/back.png')} />
                    <Text style={[styles.textBold,{fontSize:15}]}>返回</Text>
                </TouchableOpacity>
                <View style={styles.headMenu}><Text style={styles.textBold}>编辑资料</Text></View>
            </View>

            <ScrollView style={styles.ScrollViewBody}>
                <View style={styles.psnInfo}>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>姓名：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                 >
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>年龄：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                keyboardType='numeric' >
                            </TextInput>
                        </View>
                    </View>
                    <View style={[styles.psnInfoLine,{borderBottomWidth:0}]}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>电话：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                keyboardType='numeric' >
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.psnInfo}>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>职称：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                 >
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>科室：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                 >
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>医院：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                >
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.psnInfoLine}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>价格：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput
                                keyboardType='numeric' >
                            </TextInput>
                        </View>
                    </View>
                    <View style={[styles.psnInfoLine,{borderBottomWidth:0}]}>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>备注：</Text></View>
                        <View style={styles.psnInfoLineValue}>
                            <TextInput >
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={[styles.psnInfo,{marginBottom:20}]}>
                    <View>
                        <View style={styles.psnInfoLineKey}><Text style={styles.textStyle}>出诊时间设置：</Text></View>
                        <View style={[styles.psnInfoLineValue,{paddingBottom:10,}]}><JobViewEdit /></View>{/*出诊安排*/}
                    </View>
                </View>
            </ScrollView>
        </View>
      );
    }
}

export default DoctorMsgEdit;
