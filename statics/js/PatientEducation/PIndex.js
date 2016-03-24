/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';




class PIndex extends Component {
     constructor(props){
        super(props);
        this.state={
            diags:[],
        }
    };

      changeDiags(diags){
            this.setState({diags:diags});
      }
      jump(txt){
          this.props.navigator.push({
              name:txt,
              diags:this.state.diags,
          })
      }

  render() {
    return (
     <Image
             source={require('../../images/PE/back.png')}
             style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}
             >
      <View style={styles.container}>  
            <View style={styles.tittle}>
                  <View style={styles.titleContent}>
                    <Text style={styles.name}>患教</Text>
                  </View>
          </View>
            <View style={{flex:1,flexDirection: 'column',}}>
               <Image
               resizeMode='stretch'
                source={require('../../images/load/background.png')}
                style={{margin:20,height:250,}}/>
                    <TouchableOpacity style={styles.touchStyle} onPress={()=>this.jump('CreatePage')}>
                            <Text style={[styles.touchTxt,{borderBottomWidth:0}]}>创建患教</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchStyle}  onPress={()=>this.jump('ManagerPage')}>
                            <Text style={styles.touchTxt}>管理患教</Text>
                    </TouchableOpacity>
            </View>
      </View>
      </Image>
    );
  }
};


const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      height:Dimensions.get('window').height-70,
      flex:1,
  },
 
    tittle:{
    backgroundColor:'#878181',
    flexDirection: 'column',
    height:40,
    justifyContent: 'center',
  },
  titleContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft:10,
    marginRight:10,
  },
  name:{
    color:'white',
     fontSize:18,
  },
  touchStyle:{
      height:40,
      backgroundColor:'white',
      justifyContent:'center',
      borderBottomWidth:1,
    
  },
  touchTxt:{
      fontSize:15,
  },
});

  export default PIndex;
