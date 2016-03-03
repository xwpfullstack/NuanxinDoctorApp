'use strict'

import React,{
  View,
  Text,
  Image,
  Component,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const _width = Dimensions.get('window').width;

var ImagePickerManager = require('NativeModules').ImagePickerManager;

class DoctorPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceUrl: null,
    }
  }
  
  _onPressLoadCamera() {
    var options = {
      title: '选择头像获取方式',
      cancelButtonTitle: '结束',
      takePhotoButtonTitle: '照相机',
      chooseFromLibraryButtonTitle: '相册',
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      maxWidth: 200,
      maxHeight: 200,
      aspectX: 2,
      aspectY: 1,
      quality: 1,
      angle: 0,
      allowEditing: false,
      noData: false,
      storageOpations: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePickerManager.showImagePicker(options,(response) => {
      if(response.error) {
        console.log('ImagePickerManager Error: ',response.error);
      }else {
        //const source = {uri: 'data:image/jpeg;base64,' + response.data,isStatic: true};
        // uri (on iOS)
        //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        //uri (on android)
        const source = {uri: response.uri, isStatic: true};
        this.setState({
          sourceUrl: source,
        });
      }
    })
  }

  _onPressSubmit() {
    if(!this.state.sourceUrl) {
      return null;
    }
  }

  render() {
    return(
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            marginTop: 10,
            borderWidth: 2,
            borderColor: 'grey',
            width: 250,
            height: 250,
          }}
        >
         {this.state.sourceUrl ? 
            (
              <Image 
                source={this.state.sourceUrl} 
                style={{width: 250,height: 250,}}
              />) : 
            (
              <Text 
                style={{marginTop: 100,fontSize:18,textAlign:'center'}}
              >
                上传您的头像
              </Text>)
          }
        </View>
        <TouchableOpacity
          onPress={()=>{this._onPressLoadCamera()}}
        >
          <View
            style={{
              width: 250,
              height: 40,
              borderWidth: 1,
              borderColor: 'orange',
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'orange',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              选择照片
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this._onPressSubmit()}}
        >
          <View
            style={{
              width: _width-40,
              height: 40,
              margin: 20,
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: this.state.sourceUrl ? 'orange' : 'grey',
              borderRadius: 5,
              backgroundColor: this.state.sourceUrl ? 'orange' : 'transparent',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              完成
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DoctorPhoto;
