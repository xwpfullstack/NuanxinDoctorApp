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
import HomePage from './HomePage'
const {_width,_height}=Dimensions.get('window');

class Hometwo extends Component{
  constructor(){
    super();
    this.state={
      nums:0,
      Lvisible:false,
      modalStyle:{},
      modalContent:{},
    };

    };

changeNums(num){
  this.setState({nums:num});
};



closeModal(){
   if (this.state.Lvisible === true) {
     this.setState({Lvisible:false});
  }
};

closeCenterModal(){
  if (this.state.centerVisible === true) {
     this.setState({centerVisible:false});
  }
};
openCenterModal(){
    this.setState({modalStyle:{
                    top:(Dimensions.get('window').height-400)/2,
                    left:(Dimensions.get('window').width-250)/2,
                    height:400,
                    width:250,
                    backgroundColor: 'rgba(255, 255, 255,0.8)',
                  },
                  modalContent: <Text>aaa</Text>

                });
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
                    modalContent:<FLModal close={()=>this.closeModal()} openCenter={()=>this.openCenterModal()}/> ,
                  });
  }
  else{
       this.setState({Lvisible:false});
  };
};

RouteMapper(route, navigator){

      if (route.name === 'home') {
       return (
            <HomePage navigator={navigator}/>
        );
      }
      else if(route.name === 'self'){
          return <PatientSelf id={route.id} mainNavigator={this.props.mainNavigator} navigator={navigator}/>
      }

    };
    render(){
       return     <Navigator
          style={styles.navigatorStyle}
          initialRoute={{name:'home'}}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={ (route, navigator)=>this.RouteMapper(route, navigator)} />
    }
  };

const styles = StyleSheet.create({
  navigatorStyle:{
    flexDirection: 'row',
    height:Dimensions.get('window').width*2,

  },
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

  export default Hometwo;
