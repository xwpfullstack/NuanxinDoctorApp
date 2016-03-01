'use strict'

import React, {
  Alert,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

import Modal from 'react-native-root-modal';
import MedcineModal from './MedcineModal';

var DataJson=[
     {'id':1,'name':'睡眠行为障碍'},
      {'id':2,'name':'抑郁状态'},
      {'id':3,'name':'帕金森'},
      {'id':4,'name':'颠簸'},
      {'id':5,'name':'脑血管病'},
      {'id':6,'name':'不安腿综合症'},
      {'id':7,'name':'运动神经元病'},
      {'id':8,'name':'失眠'},
      {'id':9,'name':'神经衰弱'},
      {'id':10,'name':'阿尔茨海默'},
      {'id':11,'name':'焦虑状态'},
      {'id':12,'name':'神经症'},
      {'id':13,'name':'发作性睡病'},
  ];

var useData=[];
var subData=[];
class AddMedcine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      productor: '',
      specification: '',
      unit: '',
      amount: '',
      meathod: '',
       Lvisible:false,
       txtMsg:'',
    }
  }

componentWillMount(){
     useData=DataJson.map((value,index)=>{
        value['isCheak']=false;
        return value;
     });
};
changeMedia(datas){
    useData=datas;
    subData=[];
    var msg='';
    subData=useData.filter((value)=>{
        if (value['isCheak']) {
            msg+=(value['name']+'、');
            return value;
        }
    });
    if (msg.length>14) {
      msg = msg.substring(0,14);
      msg=msg[msg.length-1]=='、' ?msg.substring(0,msg.length-1):msg;
      msg+='……';
    }
    else{
      msg = msg.substring(0,msg.length-1);
    }
   
    this.setState({txtMsg:msg});
};

closeModal(){
    this.setState({Lvisible:false});
};

openModal(){
     this.setState({Lvisible:true});
};

  popOut() {
         this.props.navigator.pop();
  }

  submit() {
    let postData = {'name': this.state.name,
      'productor': this.state.productor,
      'specification': this.state.specification,
      'unit': this.state.unit,
      'amount': this.state.amount,
      'meathod': this.state.meathod,
      'cheakMedia':subData
    }
    console.log(JSON.stringify(postData));
  }

  update() {

  }
  render() {
    return (
      <View>
        <View style={styles.title}>
          <View style={styles.titleReturn}>
            <TouchableHighlight
              underlayColor='rgba(34,26,38,0.1)'
              onPress={()=>this.popOut()}>
              <Text style={styles.titleReturnText}>《 返回</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.titleName}>
            <Text style={styles.titleNameText}>添加药物</Text>
          </View>
        </View>

        <View style = {styles.inputLine}>
          <Text style = {styles.label}>请选择医生诊断</Text>
          <View style = {[styles.inputStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style = {{paddingLeft: 11, justifyContent: 'center'}}>
              <Text style = {{alignSelf: 'center', fontSize: 12, color: '#0094ff',}}>{this.state.txtMsg}</Text>
            </View>
            <TouchableHighlight
              style = {styles.chooseButton}
              underlayColor='rgba(34,26,38,0.1)'
              onPress={()=>this.openModal()}>
              <Text style={styles.titleReturnText}>···</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>名称</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({productor: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}  />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>厂家</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({productor: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用单位</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({unit: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用剂量</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({amount: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>服用方法</Text>
          <View style = {styles.inputStyle}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({meathod: text})}
              selectTextOnFocus = {true}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {styles.inputLine}>
          <Text style = {styles.label}>说明书</Text>
          <View style = {[styles.inputStyle, {height: 120}]}>
            <TextInput
            style = {styles.searchInput}
              onChangeText = {(text) => this.setState({specification: text})}
              selectTextOnFocus = {true}
              multiline = {true}
              numberOfLines = {6}
              textAlignVertical = {'top'}
              underlineColorAndroid = {'transparent'}
            />
          </View>
        </View>
        <View style = {[styles.inputLine, {justifyContent: 'flex-start'}]}>
          <TouchableHighlight
            underlayColor='rgba(34,26,38,0.1)'
            onPress={()=>this.chooseFile()}
            style={styles.filebuttonStyle}
          >
            <Text style={styles.filebuttonText}>选择文件</Text>
          </TouchableHighlight>
          <Text>未选择文件</Text>
        </View>
        <TouchableHighlight
          underlayColor='rgba(34,26,38,0.1)'
          onPress={()=>this.update()}
          style={[styles.buttonStyle, {alignSelf: 'flex-start', marginLeft: 11,}]}
        >
          <Text style={styles.buttonText}>上传</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='rgba(34,26,38,0.1)'
          onPress={()=>this.submit()}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>提交</Text>
        </TouchableHighlight>


         <Modal visible={this.state.Lvisible}  
                      style={{height:Dimensions.get('window').height,
                                  width:Dimensions.get('window').width,top:0,bottom:0,left:0,right:0,backgroundColor:'rgba(0,0,0,0.1)'}}>
                                  <View style={styles.modalStyle}>
                                        <MedcineModal changeMedia={(datas)=>this.changeMedia(datas)} closeModal={()=>this.closeModal()}  DataJson={useData}/>
                                  </View>
                </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#868181',
    height: 45,
    padding: 11,
  },
  titleReturn: {
    flex: 3,
  },
  titleReturnText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 14,
    color: '#FFFFFF',
  },
  titleName: {
    flex: 4
  },
  titleNameText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FFFFFF',
  },
  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    paddingVertical: 4,
  },
  chooseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#333333',
    backgroundColor: '#666666',
    width: 30,
  },
  label: {
    flex: 2,
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
    color: '#666666',

  },
  inputStyle: {
    flex: 4,
    height: 30,
    justifyContent: 'center',
    borderColor: '#333333',
    borderRadius: 4,
    borderWidth: 1,
  },
	searchInput: {
		fontSize: 12,
	},
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: 30,
    width: 80,
    borderWidth: 0.4,
    borderColor: '#FEA501',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: 11,
    marginRight: 11,
  },
  buttonText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 18,
    color: '#FEA501',
  },
    modalStyle:{
      top:(Dimensions.get('window').height-300)/2,
      left:(Dimensions.get('window').width-250)/2,
      height:300,
      width:250,
      borderWidth:1,
      borderColor:'#ffffff',
      borderRadius:20,
      backgroundColor: '#ffffff',
  },
  filebuttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginRight: 6,
    height: 20,
    width: 80,
    borderWidth: 0.4,
    borderRadius: 10,
  },
  filebuttonText: {
		fontFamily: 'PingFang-SC-Regular',
		fontSize: 12,
    color: '#333333',
  },
});

export default AddMedcine;
