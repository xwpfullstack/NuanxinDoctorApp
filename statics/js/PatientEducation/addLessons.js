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
  ToastAndroid,
} from 'react-native';
import Modal from 'react-native-root-modal';

var ImagePickerManager = require('NativeModules').ImagePickerManager;
var FileUpload = require('NativeModules').FileUpload;
// const DiseaseList=[
//   {id:-1,name:'---请选择疾病---'},
//   {id:123,name:'抑郁焦虑'},
//   {id:124,name:'精神分裂'},
//   {id:125,name:'失眠'},
//   {id:126,name:'双相'},
//   {id:127,name:'帕金森'},
//   {id:128,name:'运动神经症'},
//   {id:129,name:'睡眠行为障碍'},
//   {id:130,name:'抑郁焦虑'},
//   {id:131,name:'精神分裂'},
//   {id:132,name:'失眠'},
//   {id:133,name:'双相'},
//   {id:134,name:'帕金森'},
//   {id:135,name:'运动神经症'},
//   {id:136,name:'睡眠行为障碍'},
//   {id:137,name:'抑郁焦虑'},
//   {id:138,name:'精神分裂'},
//   {id:139,name:'失眠'},
//   {id:140,name:'双相'},
//   {id:141,name:'帕金森'},
//   {id:142,name:'运动神经症'},
//   {id:143,name:'睡眠行为障碍'}
// ];
//

class AddLessons extends Component {
  constructor(){
    super();
    this.state={
        // isLoad:true,
        isSelected:false,
        isUploaded:false,
        photoUrl:'',
        // disease:-1,
        title:'',
        imageName:'',
        content:'',
        url:'',
        delayDays:'',
        updatePicPrompt:'点此选择图片',
    };
};
cancel() {
  this.setState({disease:-1,title:'',content:'',link:'',delayDays:''});
}
chooseAndUpdate() {
  if (!this.state.isSelected) {
    this.chooseFile();
  } else if (!this.state.isUploaded) {
    this.update();
  } else {
    ToastAndroid.show('图片已上传', ToastAndroid.LONG);
  }
}
chooseFile(){
  var options = {
    title: '选择图片',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从相册获取',
    cameraType: 'front',
    mediaType: 'photo',
    videoQuality: 'high',
    maxWidth: 1000,
    maxHeight: 1000,
    aspectX: 1,
    aspectY: 2,
    quality: 1,
    angle:270,
    allowEditing: true,
    noData: false,
    isUploaded: false,
    isSelected: false,
    storageOpations: {
      skipBackup: false,
      path: 'images'
    }
  };
  ImagePickerManager.showImagePicker(options,(response) => {
    if(response.error) {
      console.log('ImagePickerManager Error: ',response.error);
    }else if(response.didCancel) {
      console.log('User cancelled image picker');
    }else if(response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }else {
      /*const source = {uri: 'data:image/jpeg;base64,' + response.data,isStatic: true};*/
      const source = {uri: response.uri,isStatic: true};
      this.setState({
        isSelected: true,
        photoUrl: source,
        updatePicPrompt:'选择完成,点此上传图片',
      });
    }
  })
}

update() {
  var pathArray = this.state.photoUrl['uri'].split('/');
  var imageName = pathArray[pathArray.length-1];
  var obj = {
    uploadUrl: Uploadphoto_URL,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    fields: {
      'class':'lesson',
    },
    files: [
      {
        name: '',
        filename: imageName,
        filepath: this.state.photoUrl['uri'],
        filetype: null,
      },
    ]
  };
  FileUpload.upload(obj,(err,result)=>{
    var data = result['data'];
    var obj = eval("("+data+")");
    this.setState({
      isUploaded: true,
      updatePicPrompt:'上传成功',
      imageName:obj['pic'],
    })
  })

}
commit() {
  if (this.state.title === '') {
    Alert.alert('提醒', '请输入主题。');
    return;
  }
  if (this.props.type==='word') {
    if (this.state.content === '') {
      Alert.alert('提醒', '请输入内容。');
      return;
    }
  } else {
    if (this.state.url === '') {
      Alert.alert('提醒', '请输入链接。');
      return;
    }
  }
  // if (!this.state.isSelected || !this.state.isUploaded) {
  //   Alert.alert('提醒', '请上传图片。');
  //   return;
  // }
  if (this.state.delayDays === '') {
    Alert.alert('提醒', '请输入推送时间。');
    return;
  }
  // this.setState({isLoad: false});
  // Alert.alert('','doctorId:'+this.props.doctorId+' '+
  //                'title:'+this.state.title+' '+
  //                'context:'+this.state.content+' '+
  //                'link:'+this.state.url+' '+
  //                'pushtime:'+this.state.delayDays+' '+
  //                'ttype:'+type);
  this.postData();
}
popOut() {
  this.props.navigator.pop();
}
changeTxt(key,value){
  this.state[key]=value;
    this.setState({DocMsg:this.state.DocMsg});
};
postData(){
    fetch(AddLesson_URL,{
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               doctor_id:this.props.doctorId,
               title:this.state.title,
               pic:'tobecontinued..',
               context:this.state.content,
               link:this.state.url,
               pushtime:parseInt(this.state.delayDays),
               ttype:(this.props.type==='word'?0:
                      this.props.type==='url'?1:2),
               diags:this.props.diags,
            })
      })
      .then((response) => {
          // Alert.alert('', 'response');
           return response.json();
      })
      .then((responseData)=>{
        // console.log(responseData);
          // this.setState({isLoad:true, data:responseData,isSuccess:true,})
          // if (responseData.status === 'success') {          }
            ToastAndroid.show('发送成功', ToastAndroid.LONG);

          // Alert.alert('',JSON.stringify(responseData));
        // this.setState({isLoad:true, data:responseData.patients,isSuccess:true,})
        // this.BaseCreateData(this.state.data,'date');
                  // Alert.alert('',this.state.data[0].date);
      })
      .catch((err)=>{
          // Alert.alert('catch err',err.toString())
          // this.setState({isSuccess:false,isLoad:true});
          // console.log(err.toString());
      })
      .done();
};
  render() {
    let mainInput=(this.props.type=='word')?
      <TextInput
        style={[styles.textInput,{height: 120}]}
        placeholder='编辑患教正文内容...'
        value={this.state.content}
        placeholderTextColor='#BFBFBF'
        onChangeText={(txt)=>this.changeTxt('content',txt)}
        underlineColorAndroid='transparent'
        multiline={true}
        numberOfLines={5}
      /> :
      <TextInput
        style={[styles.textInput,{height: 45}]}
        placeholder='编辑网页链接地址...'
        keyboardType='url'
        value={this.state.url}
        placeholderTextColor='#BFBFBF'
        onChangeText={(txt)=>this.changeTxt('url',txt)}
        underlineColorAndroid='transparent'
      />
    return (
      <Image
        source={require('../../images/PE/back.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.tittle}>
          <View style={styles.titleContent}>
          <TouchableOpacity style={{width:50}} onPress={()=>this.popOut()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
            <Text style={styles.name}>新增患教</Text>
            <View style={{width:50}}></View>
          </View>
        </View>
        <ScrollView style={styles.container}>
          {/*<View style={{marginLeft:11,marginTop:11}}>
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
            </Picker>*/}
            <View style={{marginLeft:11,marginTop:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>标题</Text>
            </View>
            <TextInput
              style={[styles.textInput,{height: 45}]}
              placeholder='简单介绍...'
              value={this.state.title}
              placeholderTextColor='#BFBFBF'
              onChangeText={(txt)=>this.changeTxt('title',txt)}
              underlineColorAndroid='transparent'
            />
            <View style={{marginLeft:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>内容</Text>
            </View>
            {mainInput}
            <View style={{marginLeft:11}}>
              <Text style={[styles.normalText,{color: '#F08300'}]}>上传图片</Text>
            </View>
            <TouchableOpacity onPress={()=>this.chooseAndUpdate()} style={[styles.textInput,{alignItems: 'center',backgroundColor: '#DDDDDD',borderRadius:6}]}>
              <Text style={[styles.normalText,{color: '#666666'}]}>{this.state.updatePicPrompt}</Text>
            </TouchableOpacity>
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
              {/*<TouchableOpacity onPress={()=>this.cancel()} style={styles.deleteButton}>
                <Text style={[styles.normalText,{color: '#666666'}]}>取消</Text>
              </TouchableOpacity>*/}

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
  tittle:{
    backgroundColor:'#878181',
    flexDirection: 'column',
    height:40,
    justifyContent: 'center',
  },
  titleContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:10,
    marginRight:10,
  },
  name:{
    color:'white',
     fontSize:18,
  },
  container: {
    height: Dimensions.get('window').height-10,
  },
  rowSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 11,
    marginVertical: 22,
    padding:11,
  },
  normalText: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 16,
    fontWeight: '100',
    color: '#FFFFFF',
  },
  textInput: {
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
