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
  Dimensions,
} from 'react-native';

const DAYDIFF=86400000;
import Loading  from './Loading';

 let proDate=new Date();
class PatientMsgImage extends Component{
	constructor(props){
	    super(props);  


	    var table=this.createTables();
	    this.state={
	    	isLoad:false,
	    	datas:{},
	    	tables:table,
	    	patientData:this.props.patientData,
	    	dates:[new Date(proDate.getTime()-7*DAYDIFF),new Date(proDate.getTime())],
	    }
	};
	postData(){
		this.setState({isLoad:false});
		fetch(PatRecords_URL,{
		            method: 'post',
		            headers: {
		              'Accept': 'application/json',
		              'Content-Type': 'application/json',
		            },
		            body: JSON.stringify({
		              patient_id:this.props.patientData.id,
		            })
		      })
		      .then((response) => {
		           return response.json();
		      })
		      .then((responseData)=>{
		        this.setState({datas:responseData,isLoad:true});
		        this.changeSetTables();
		        //console.log(responseData);
		       
		      })
		      .catch((err)=>{
		          console.log(err.toString());
		      })
		      .done();
	};
	componentDidMount(){
		this.postData();
	}
	filterDatas(){
		let result={};
		//console.log(this.state.dates);
		for (let key in this.state.datas){
			if (key != 'status') {
				let tempList=this.state.datas[key].filter((value)=>{
					let date=new Date(value['ctime']);
					return this.state.dates[0].getTime()<=date.getTime() && this.state.dates[1].getTime()>=date.getTime()
				});
				result[key]=tempList;
			}
		}
		return result;
	}
	changeSetTables(){
		let filData=this.filterDatas();
		this.ClearTables();
		for (let key in filData){
			let index;
			switch(key){
				case 'cases':
				index=0;
				break;
				case 'followUps':
				index=1;
				break;
				case 'tests':
				index=2;
				break;
			}
			for (let data of filData[key]){
				let date=new Date(data['ctime']);
				let nums=parseInt((date.getTime()-this.state.dates[0].getTime())/DAYDIFF);
				this.state.tables[index][nums] = data;
			}
		};
		this.setState({tables:this.state.tables});
	}
	createTables(){
		let table=[];
		for (let i = 0; i < 4; i++) {
			table.push([]);
			for (let j = 0; j < 7; j++) {
				table[i].push('');
			};
		};
		return table;
	};
	ClearTables(){
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 7; j++) {
				this.state.tables[i][j]='';
			};
		};

	};
	getMsg(data,type){
		console.log(data);
		let id;
		switch(type){
			case 0:
			id=data.case_id;
			break;
			case 1:
			id=data.follow_id;
			break;
			case 2:
			id=data.record_id;
			break;
		};
		console.log(JSON.stringify({
		              patient_id:this.props.patientData.id,
		              id:id,
		              record_type:type,
		            }));
		fetch(PatRecordsDetails_URL,{
		            method: 'post',
		            headers: {
		              'Accept': 'application/json',
		              'Content-Type': 'application/json',
		            },
		            body: JSON.stringify({
		              patient_id:this.props.patientData.id,
		              id:id,
		              record_type:type,
		            })
		      })
		      .then((response) => {
		           return response.json();
		      })
		      .then((responseData)=>{
		        console.log(responseData);
		      })
		      .catch((err)=>{
		          console.log(err.toString());
		      })
		      .done();

	}
	createViewByTb(){
		let columnView=[];
		let rowView=[];
		let viewColors=['#63B13C','#FDB611','#F2711A','#E4141C'];
		if (this.state.isLoad == false) {
			columnView=(<Loading />);
		}
		else{
			for (let i = 0; i < this.state.tables.length; i++) {
				rowView.push([]);
				columnView.push(
					<View key={i} style={styles.trView}> 
						{rowView[i]}
					</View>
				);
				for (let j = 0; j < this.state.tables[i].length; j++) {
					let content;
					if (this.state.tables[i][j] == '') {
						content=(<View style={[styles.tdView]}>
							</View>);
					}
					else{
						//console.log(this.state.tables[i][j]);
						content=(
						<TouchableOpacity onPress={()=>this.getMsg(this.state.tables[i][j],i)} style={[styles.tdView,{backgroundColor:viewColors[i]}]}>
							<Text style={styles.trTxt}>{this.state.tables[i][j]['ctime'].split('/')[2]}</Text>
						</TouchableOpacity>);
					}
					rowView[i].push(
						content
					);
				};
			};
		}
		return columnView;
	};
	proWeek(){
		let tempDate=this.state.dates.map((value)=>{
			value=new Date(value.getTime()-7*DAYDIFF);
			return value;
		});
		this.setState({dates:tempDate});
		this.changeSetTables();
	};
	nextWeek(){
		let tempDate=this.state.dates.map((value)=>{
			value=new Date(value.getTime()+7*DAYDIFF);
			return value;
		});
		this.setState({dates:tempDate});
		this.changeSetTables();
	};
	render(){
		return (
			<View style={styles.container} >
				<View style={styles.DfImageMain}>
					<View style={styles.MainContent}>
						<View style={styles.rowTl}>
							<View style={[styles.rowTr,{backgroundColor:'#63B13C'}]}>
								<Text style={styles.trTxt}>处方</Text>
							</View>
							<View style={[styles.rowTr,{backgroundColor:'#FDB611'}]}>
								<Text style={styles.trTxt}>随访</Text>
							</View>
							<View style={[styles.rowTr,{backgroundColor:'#F2711A'}]}>
								<Text style={styles.trTxt}>测量</Text>
							</View>
							<View style={[styles.rowTr,{backgroundColor:'#E4141C'}]}>
								<Text style={styles.trTxt}>luna</Text>
							</View>
						</View>
						<View style={styles.tabelTB}> 
							{this.createViewByTb()}
						</View>
					</View>				
				</View>
				<View  style={styles.DfImageCG}>
				<View style={styles.DfImageCGContent}>
					<TouchableOpacity onPress={()=>this.proWeek()} style={styles.btnImage}><Image source={require('../../images/icon/prepM.png')}></Image></TouchableOpacity>
					<Text style={{alignSelf:'center',fontSize:18}}> {`${this.state.dates[0].getMonth()+1}月${this.state.dates[0].getDate()}号`}- {`${this.state.dates[1].getMonth()+1}月${this.state.dates[1].getDate()}号`} </Text>
					<TouchableOpacity onPress={()=>this.nextWeek()} style={styles.btnImage}><Image source={require('../../images/icon/nextM.png')}></Image></TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};
};

const styles = StyleSheet.create({
  	container: {
    		height:250,
    		backgroundColor:'#ffffff',
    		marginBottom:10,
  	},
  	btnImage:{
  		height:50,
  		width:50,
  		justifyContent:'center',
  		alignItems:'center',
  	},
	DfImage:{
		flexDirection: 'column',
		flex:1,
	},
	DfImageMain:{
		flex:3,
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
	MainContent:{
		flexDirection:'row',
		flex:1,
	},
	rowTl:{
		flexDirection:'column',
		flex:1,
	},
	tabelTB:{
		flexDirection:'column',
		flex:4,
	},
	rowTr:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	trTxt:{
		color:'white',
		fontSize:15,
	},
	trView:{
		flexDirection:'row',
		flex:1,
	},
	tdView:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:Dimensions.get('window').width*0.75/7,
	},
});

  export default PatientMsgImage;
