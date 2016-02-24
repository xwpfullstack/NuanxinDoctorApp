'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Navigator,
} from 'react-native';


import ViewPager from 'react-native-scrollable-tab-view'


class PatientMsgImage extends Component{
	render(){
		return (
			<View style={styles.container} >
				<ViewPager locked={true} initialPage={0}  tabBarUnderlineColor='#FA7E00'  tabBarActiveTextColor='#000000'>
					<View tabLabel='处方'  style={styles.DfImage}>
						
							<View style={styles.DfImageMain}>
									
							</View>
							<View  style={styles.DfImageCG}>
								<View style={styles.DfImageCGContent}>
									<TouchableOpacity><Image source={require('../../images/icon/prepM.png')}></Image></TouchableOpacity>
									<Text> {'3月1号'}-{'3月7号'} </Text>
									<TouchableOpacity><Image source={require('../../images/icon/nextM.png')}></Image></TouchableOpacity>
								</View>
							</View>
						
					</View>
					<View tabLabel='随访'><Text>AAA</Text></View>
					<View tabLabel='测量'><Text>AAA</Text></View>
				</ViewPager>
			</View>
		);
	};
};

const styles = StyleSheet.create({
  	container: {
    		height:300,
    		backgroundColor:'#ffffff',
    		marginBottom:10,
  	},
	DfImage:{
		flexDirection: 'column',
		flex:1,
	},
	DfImageMain:{
		flex:3,
		borderBottomWidth:1,
		height:200,
	},
	DfImageCG:{
		flex:1,
		height:50,
		flexDirection:'column',
		justifyContent: 'center',
	},
	DfImageCGContent:{
		
		flexDirection:'row',
    		justifyContent: 'space-around',
	},
});

  export default PatientMsgImage;
