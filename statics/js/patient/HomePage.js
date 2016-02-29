'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TextInput,
  Alert,
  TouchableOpacity,
  Navigator,
  TouchableHighlight,
} from 'react-native';
import MainList from './MainList';
import Head from './Head';
import PatientSelf from './PatientSelf';
import Modal from 'react-native-root-modal'
import FLModal from './FLModal'
import Picker from 'react-native-picker';
const {_width,_height}=Dimensions.get('window');




var DataJson=[
      '睡眠行为障碍',
    '抑郁状态',
     '帕金森',
     '颠簸',
      '脑血管病',
     '不安腿综合症',
     '运动神经元病',
    '失眠',
      '神经衰弱',
      '阿尔茨海默',
     '焦虑状态',
      '神经症',
     '发作性睡病',
  ];


class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      Lvisible:false,
      modalStyle:{},
      modalContent:{},
    };
    };

changeNums(num){
  this.refs['head'].changeNum(num);
};



closeModal(){
   if (this.state.Lvisible === true) {
     this.setState({Lvisible:false});
  }
};
classify(name){
  if (name == 'time') {
        this.refs['mainlist'].createData(name);
  }
  else if(name == 'isCollect'){
          this.refs['mainlist'].isCollect();
  }
      
};
openCenterModal(){
  this.closeModal();
    this.picker.toggle();
};
showModel(){
  if (this.state.Lvisible === false) {
     this.setState({Lvisible:true,
                    modalStyle:{
                      position: 'absolute',
                      right: 10,
                      top: 116.5,
                      height:100,
                      width:100,
                      backgroundColor: 'rgba(255, 255, 255,0.8)',},
                    modalContent:<FLModal  classify={(name)=>this.classify(name)} close={()=>this.closeModal()} openCenter={()=>this.openCenterModal()}/> ,
                  });
  }
  else{
       this.setState({Lvisible:false});
  };
};


    render(){
       return (
          //<Text>aaa</Text>
              <Image
              source={require('../../images/load/background.png')}
              style={styles.background}
              > 
              <View style={styles.topTitle}>
              <Text style={[styles.textColor,styles.topText]}> 病人</Text>
              </View>
              <Head ref='head' showModel={()=>this.showModel()} />
              <View 
                style={styles.container}
              >
              <MainList ref='mainlist' closeModal={()=>this.closeModal()}  changeNums={(num)=>this.changeNums(num)} navigator={this.props.navigator}/>
              <Modal visible={this.state.Lvisible}  
                      style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,top:0,bottom:0,left:0,right:0}}>
                            <TouchableOpacity  onPress={()=>this.closeModal()} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}>
                                  <View style={this.state.modalStyle}>
                                        {this.state.modalContent}
                                  </View>
                            </TouchableOpacity>
              </Modal>
                <Picker
                      style={{
                          height: 200,
                      }}
                      pickerBtnText={'提交'}
                      pickerCancelBtnText={'取消'}
                      ref={picker=>this.picker = picker}
                      showDuration={330}
                      showMask={true}
                      pickerData={DataJson}
                      selectedValue={'睡眠行为障碍'}/>

              </View>
              </Image>
        );
    }
  };

const styles = StyleSheet.create({

container:{
  backgroundColor: 'rgba(255,255,255,0.102)',
    flexDirection: 'row',
   flex:1,
},
  background:{
    width:_width,
    height:_height,
  },
  modal:{
  },
    topTitle:{
     backgroundColor: '#868181',
     height:45,
     justifyContent:'center',
  },
  topText:{
    textAlign:'center',
    fontSize:18,
  },
    textColor:{
    color:'#ffffff',
  },
});

  export default HomePage;
