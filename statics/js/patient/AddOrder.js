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
 TouchableHighlight,
 TouchableOpacity,
} from 'react-native';

import ViewPager from './MainBar';
import PatientTB from './PatientTB';
import Diagnose from './Diagnose';
import ChooseMedis from './ChooseMedis';
import EatMedine from './EatMedine';


var PatientMsg={
  'sick':[],
  'media':[],
};

class AddOrder extends Component{
  constructor(){
    super();
};
handleBack(){
  this.props.navigator.pop();
};
gotoPage(num){
  this.refs['page'].goToPage(num);
};


changeMedia(media,isdel,name){
    if (isdel) {
        for (var i = 0; i <PatientMsg[name].length ; i++) {
          if (PatientMsg[name][i] === media) {
                PatientMsg[name].splice(i,1);
          }
        }
    }
    else{
        PatientMsg[name].push(media);       
    }  
    this.refs['EM'].reDrawPage(PatientMsg);
};
render(){
    return  (
        <View style={styles.container}>
          <View style={styles.tittle}>
              <View style={styles.titleContent}>
                  <TouchableOpacity onPress={()=>this.handleBack()} style={{ flexDirection: 'row',}}>
                      <Image  source={require('../../images/icon/back.png')} style={{marginRight:5,}}/>
                      <Text style={styles.txtColor}></Text>
                  </TouchableOpacity>
                  <Text style={[styles.txtColor,{fontSize:15}]}>添加药单</Text>
                  <Text style={styles.txtColor}>...</Text>
              </View>
          </View>
          <View style={styles.FGView}></View>
              <ViewPager  ref='page'  renderTabBar={()=><PatientTB />}>
                  <View tabLabel='诊断'>
                        <Diagnose  
                              navigator={this.props.navigator}
                              changeMedia={(media,isdel)=>this.changeMedia(media,isdel,'sick')}  
                              gotoPage={(num)=>this.gotoPage(num)}/>
                  </View>
                  <View  tabLabel='选药'>
                        <ChooseMedis  
                              navigator={this.props.navigator}
                              changeMedia={(media,isdel)=>this.changeMedia(media,isdel,'media')}  
                              gotoPage={(num)=>this.gotoPage(num)}/>
                  </View>
                  <View tabLabel='服用方法'><EatMedine ref='EM' PatientMsg={PatientMsg} /></View>
              </ViewPager>
        </View>
      );
};
};


const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection: 'column',    
    },
    txtColor:{
        color:'rgb(255,255,255)',
    },
    tittle:{
    backgroundColor:'#757575',
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
  FGView:{
    height:10,
    backgroundColor:'#FE9300',
  },
  mainView:{
    flex:1,
    flexDirection: 'column',    
    backgroundColor:'#F4F1F5',
    alignItems:'center',
  },
  tarbar:{
     flexDirection: 'row',
     justifyContent:'center',
     marginTop:12,
     height:30,
     backgroundColor:'#F4F1F5',
     width:Dimensions.get('window').width-150,
     borderWidth:1,
     borderColor:'#FE9300',
     marginBottom:12,    
  },
  tarbarItem:{
    flex:1,
    height:30,
    alignSelf:'center',
    justifyContent:'center',
   
  },
  tarbarItemText:{
      textAlign:'center',
     color:'#FE9300',
  },


});


export default AddOrder;
