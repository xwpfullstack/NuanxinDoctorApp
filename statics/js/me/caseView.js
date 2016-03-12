'use strict';

import styles from './styles';
import BackTitle from './back';

import React, {
    Component,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    View,

} from 'react-native';


class CaseView extends Component{
    render(){
        return(
            <View>
                <Image
                    source={require('../../images/load/background.png')}
                    style={styles.allPage}
                >
                    <View style={styles.caseViewLine}>
                        <View style={{flex:1}}>
                            <Text style={[styles.textBold,{color:'#f08300'}]}>主诉:</Text>
                        </View>
                        <View style={styles.addCaseInput}>
                            <TextInput
                                textAlignVertical={'center'}
                                underlineColorAndroid={'transparent'}
                            >
                            </TextInput>
                        </View>
                    </View>

                    <View style={styles.nessDescription}>
                        <View style={{
                            height:36,
                            justifyContent:'center',
                            }}>
                            <Text style={styles.caseText}>病情描述:</Text>
                        </View>
                        <View>
                            <TextInput
                                textAlignVertical={'center'}
                                underlineColorAndroid={'transparent'}
                                multiline={true}
                                numberOfLines={3}
                                style={[styles.caseText,{
                                fontSize:14,
                                backgroundColor:'rgba(255,255,255,0.5)',
                                borderRadius:10
                                }]}
                            >
                            </TextInput>
                        </View>
                    </View>

                    <View style={{marginTop:10,marginBottom:5}}>
                        <Text style={[styles.textBold,{color:'#f08300'}]}>暖心诊治:</Text>
                    </View>

                    <View style={[styles.nessDescription,{
                        height:280,
                        marginTop:0,
                        }]}>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={styles.writeText}>检 查:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={styles.writeText}>曾服药物:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={styles.writeText}>诊 断:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={styles.writeText}>处 方:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Text style={styles.writeText}>治疗进展:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.caseViewLine}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={styles.writeText}>治疗心得:</Text>
                            </View>
                            <View style={styles.addCaseInput}>
                                <TextInput>

                                </TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',}}>
                        <TouchableOpacity style={styles.caseBtn}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text style={styles.caseText}>提交</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress= {() => {this.props.navigator.pop()}}
                        style={[styles.caseBtn,{
                            marginRight:0,
                            backgroundColor:'#DDDDDD',
                        }]}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text style={[styles.caseText,{color:'#666666'}]}>取消</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}

export default CaseView;
