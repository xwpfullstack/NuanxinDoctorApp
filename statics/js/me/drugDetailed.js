'use strict';
import DrugList from './drugList';
import BackTitle from './back';
import styles from './styles';
import ModelTable from './ModelTable';

import React, {
  Component,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Alert,
  ListView,
} from 'react-native';


var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;



class DrugDetailed extends Component {
    constructor(props){
      super(props);
      this.state={
        Lvisible:false,
        modal:'',
        model:{},
      };
      this.postMedModeListData();
    };

    postMedModeListData(){
        fetch(MedModelList_URL,{
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   doctor_id:this.props.doctorId,
                   medname:this.props.medname,
                })
          })
          .then((response) => {
               return response.json();
          })
          .then((responseData)=>{
            this.setState({
                model:responseData.templates,
            })
            console.log(this.state.model);
          })
          .catch((err)=>{
              this.setState({isSuccess:false,isLoad:true});
              console.log(err.toString());
          })
          .done();
    };

    isLoadData(){
        if(this.state.model.length)
            return this._showModelList();
        else{

            return this._noModel();

        }
    }

    _noModel() {
        return (
            <View style={styles.nocase}>
                <Image
                    source={require('../../images/me/casepage.png')}
                    style={{width:100,height:100}}
                />
                <View style={{paddingBottom:5}}>
                    <Text>您没有为此药添加药方,</Text>
                </View>
                <View>
                    <Text>请点击右上方添加按钮添加。</Text>
                </View>
            </View>
        )
    }

    _showModelList() {
        return (
            <View>
                <View style={{width:WINDOW_WIDTH,flexDirection:'row',height:35,justifyContent:'center',backgroundColor:'#E6E6E6'}}>
                    <Text style={[styles.caseHistoryTitle,{alignSelf:'center',}]}>{this.props.medname}</Text>
                </View>
                    <ScrollView style={{height:WINDOW_HEIGHT-80}}>
                    {
                        this.state.model.map((data,index)=>(
                            <ModelTable
                            key = {index}
                            style = {styles.recordTable}
                            recordData = {data}
                            />
                        ))}
                </ScrollView>
            </View>
        )
    }

  render() {
    return (
        <View style={{flex:1}}>
            <BackTitle
                navigator={this.props.navigator}
                addBtn={true}
                addName={'addMedModel'}
                carryData={{medname:this.props.medname}}
                title={'药品处方'} />
            <View style={styles.ScrollViewBody}>
                {this.isLoadData()}
            </View>
        </View>

      );
  };
};

export default DrugDetailed;
