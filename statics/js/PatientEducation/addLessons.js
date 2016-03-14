'use strict'

import React, {
  Alert,
  Image,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Picker,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
  TextInput,
} from 'react-native';
import Modal from 'react-native-root-modal';
const DiseaseList=[
  {id:-1,name:'---请选择疾病---'},
  {id:123,name:'抑郁焦虑'},
  {id:124,name:'精神分裂'},
  {id:125,name:'失眠'},
  {id:126,name:'双相'},
  {id:127,name:'帕金森'},
  {id:128,name:'运动神经症'},
  {id:129,name:'睡眠行为障碍'},
  {id:130,name:'抑郁焦虑'},
  {id:131,name:'精神分裂'},
  {id:132,name:'失眠'},
  {id:133,name:'双相'},
  {id:134,name:'帕金森'},
  {id:135,name:'运动神经症'},
  {id:136,name:'睡眠行为障碍'},
  {id:137,name:'抑郁焦虑'},
  {id:138,name:'精神分裂'},
  {id:139,name:'失眠'},
  {id:140,name:'双相'},
  {id:141,name:'帕金森'},
  {id:142,name:'运动神经症'},
  {id:143,name:'睡眠行为障碍'}
];
class AddLessons extends Component {
  constructor(){
    super();
    this.state={
        isLoad:true,
        disease:-1,
        title:'',
        content:'',
        link:'',
        delayDays:''
    };
};
cancel() {
  this.setState({disease:-1,title:'',content:'',link:'',delayDays:''});
}
commit() {
  Alert.alert('', this.state.title+' '+ this.state.content+' '+this.state.link+' '+this.state.delayDays);
}
changeTxt(key,value){
  this.state[key]=value;
    this.setState({DocMsg:this.state.DocMsg});
};
  render() {
    return (
      <Image
        source={require('../../images/load/background.png')}
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.container}>
          <View style={{marginLeft:11,marginTop:11}}>
            <Text style={[styles.normalText,{color: '#F08300'}]}>疾病</Text>
          </View>
            <Picker
              style={[styles.textInput,{height: 45}]}
              enabled={true}
              mode={'dropdown'}
              selectedValue={this.state.disease}
              onValueChange={(selectId) => this.setState({disease: selectId})}>
              {
                DiseaseList.map((data,index)=>(
                <Picker.Item key={index} label={data.name} value={data.id} />
              ))}
            </Picker>
            <View style={{marginLeft:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>标题</Text>
            </View>
            <TextInput
              style={[styles.textInput,{height: 45}]}
              placeholder='标题...'
              value={this.state.title}
              placeholderTextColor='#BFBFBF'
              onChangeText={(txt)=>this.changeTxt('title',txt)}
              underlineColorAndroid='transparent'
            />
            <View style={{marginLeft:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>正文</Text>
            </View>
            <TextInput
              style={[styles.textInput,{height: 120}]}
              placeholder='正文内容...'
              value={this.state.content}
              placeholderTextColor='#BFBFBF'
              onChangeText={(txt)=>this.changeTxt('content',txt)}
              underlineColorAndroid='transparent'
              multiline={true}
              numberOfLines={5}
            />
            <View style={{marginLeft:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>链接</Text>
            </View>
            <TextInput
              style={[styles.textInput,{height: 45}]}
              placeholder='网页链接...'
              keyboardType='url'
              value={this.state.link}
              placeholderTextColor='#BFBFBF'
              onChangeText={(txt)=>this.changeTxt('link',txt)}
              underlineColorAndroid='transparent'
            />
            <View style={styles.rowSet}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>推送时间</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.normalText}>第</Text>
                <View style={{borderBottomWidth:1,borderBottomColor: '#AAAAAA',height: 30,justifyContent: 'center'}}>
                  <TextInput
                    style={[styles.textInput,{height: 45, width: 60, backgroundColor:'transparent'}]}
                    value={this.state.delayDays}
                    keyboardType='numeric'
                    placeholderTextColor='#BFBFBF'
                    onChangeText={(txt)=>this.changeTxt('delayDays',txt)}
                    underlineColorAndroid='#FF0000'
                  />
                </View>
                <Text style={styles.normalText}>天</Text>
              </View>
            </View>
            <View style={[styles.rowSet, {justifyContent: 'space-around',backgroundColor:'transparent'}]}>
              <TouchableOpacity onPress={()=>this.cancel()} style={styles.deleteButton}>
                <Text style={[styles.normalText,{color: '#666666'}]}>取消</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.commit()} style={styles.deleteButton}>
                <Text style={[styles.normalText,{color: '#666666'}]}>提交</Text>
              </TouchableOpacity>
            </View>
            <View style={{height:60}}>
            </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
	},
  container: {
    height: Dimensions.get('window').height-10,
  },
  rowSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: 11,
    padding:11,
  },
  normalText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 16,
    fontWeight: '100',
    color: '#FFFFFF',
  },
  textInput: {
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: 11,
    padding:11,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 11,
    width: 80,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#DDDDDD',
  },
});

export default AddLessons;
