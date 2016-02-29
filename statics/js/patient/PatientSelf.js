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
  TouchableHighlight,
  } from 'react-native';

import PatientMsgImage from './PatientMsgImage'
import Modal from 'react-native-root-modal'
import AddModal from './AddModal'
  class PatientSelf extends Component{
  	 constructor(){
	    super();
	    this.state={
	    	 title:'科比',
              addVisible:false,
	    };
	   };
	handlerBack(){
		this.props.navigator.pop();
	};
      selfModal(){
             if (this.state.addVisible === false) {
                //Alert.alert('aaa');
                 this.setState({addVisible:true,});
              }
              else{
                   this.setState({addVisible:false});
              };
      };
      jump(value){
          this.props.mainNavigator.push({
            name:value,
          });
      };

      closeAddModal(){
            this.setState({addVisible:false});
      };
  	render(){
  		return(
  			<View style={styles.container}>
  				<View style={styles.tittle}>
  					<View style={styles.titleContent}>
						<TouchableOpacity style={{width:50}} onPress={()=>this.handlerBack()}><Image source={require('../../images/icon/back.png')}></Image></TouchableOpacity>
  						<Text style={styles.name}>{this.state.title}</Text>
  						<TouchableOpacity style={{width:50}} onPress={()=>this.selfModal()}><Image style={{alignSelf:'flex-end'}} source={require('../../images/icon/add.png')} /></TouchableOpacity>
  					</View>
  				</View>
  				<View style={styles.selfMsg}>
  				
					            <View style={styles.itemImage}>
					              <Image 
					                source={require('../../images/load/kobe.jpg')}
					                style={styles.image} />
					            </View>

					            <View style={styles.itemContent}>
					            <View style={styles.wordMSg}>
					             	<Text style={styles.itemHeader}>{'男'}  {'四川'}  {'36'}</Text>
					             	<Text style={styles.itemTwoHeader}>1317474774</Text>
					             	<Text style={styles.itemTwoHeader}>脑残 神经 二逼 豆脑</Text>
					        	</View>
					             <Image 
					                source={require('../../images/load/jump.png')} style={{borderWidth:1}}/>
					             
					            </View>
					
  				</View>
  				<PatientMsgImage />

  				<TouchableOpacity onPress={()=>this.jump('completeRecord')}>
  				<View style={[styles.tRow,{marginBottom:1,}]}>
  					<View style={styles.tRowContent}>
  						<View style={{flexDirection: 'row'}}>
  							<Image  style={{marginRight:10}} source={require('../../images/icon/record.png')} />
  							<Text>完整病例</Text>
  						</View>
  						<Image  source={require('../../images/load/jump.png')}  style={{backgroundColor:'rgba(0,0,0,0.1)'}}/>
  					</View>
  				</View>
  				</TouchableOpacity>

  				<TouchableOpacity  onPress={()=>this.jump('orderList')}>
  				<View style={styles.tRow}>
  					<View style={styles.tRowContent}>
  						<View style={{flexDirection: 'row'}}>
  							<Image  style={{marginRight:10}} source={require('../../images/icon/order.png')} />
  							<Text>订单</Text>
  						</View>
  						<Image  source={require('../../images/load/jump.png')}  style={{backgroundColor:'rgba(0,0,0,0.1)'}}/>
  					</View>
  				</View>
  				</TouchableOpacity>
          
  				<Modal 
                                visible={this.state.addVisible} 
                                 style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,top:0,bottom:0,left:0,right:0}}>
                                      <TouchableOpacity  onPress={()=>this.closeAddModal()} style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width,}}>
                                            <View style={{ 
                                                position: 'absolute',
                                                right: 1,
                                                top: 41,
                                                height:120,
                                                width:150,
                                                backgroundColor: 'rgba(0, 0, 0,0.8)',}}>
                                                    <AddModal mainNavigator={this.props.mainNavigator} close={()=>this.closeAddModal()}/>
                                            </View>
                                      </TouchableOpacity>
                                
                          </Modal>
  			</View>
  		);
  	};
  };
const styles = StyleSheet.create({
	container:{
		backgroundColor: '#E7E7E7',
		flexDirection: 'column',
	   	flex:1,

	},
	tittle:{
		backgroundColor:'#878181',
		flexDirection: 'column',
		height:40,
		justifyContent: 'center',
		marginTop:1,
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
	selfMsg:{
		flexDirection: 'row',
    		alignItems: 'center',
		height:80,
		backgroundColor:'#FFFFFF',
		marginTop:10,
		justifyContent: 'center',
		marginBottom:10,
	},
	selfMsgContent:{
		flexDirection: 'row',
	},
	image: {
	    	width: 56,
	    	height: 56,
	    	margin: 10,
	    	borderRadius: 28
	},
  	itemContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		height: 80,
		
	},
  	itemHeader: {
   		
    		fontSize: 13,
    		fontWeight: '300',
    		
  	},
  	wordMSg:{
  		flexDirection: 'column',
  		flex:1,
  		alignSelf:'flex-end',
  	},
  	itemTwoHeader:{
  		fontSize: 11,
  		color:'#C1C1C1',
  	},
  	tRow:{
  		flexDirection: 'column',
    		
		height:40,
		backgroundColor:'#FFFFFF',
		justifyContent: 'center',
  	},
  	tRowContent:{
  		flexDirection: 'row',
  		justifyContent:'space-between',
  		marginLeft:10,
  		marginRight:10,
  	},

});
    export default PatientSelf;