'use strict';

import React, {
  Component,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

import styles from './styles'
import Modal from 'react-native-root-modal';
import BackTitle from './back';



class CaseHistory extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            caseData:false,
            dataSource:ds.cloneWithRows(['1','2','3']),
        }
        this.postCaseData();
    }

    _classicCaseList() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowdata)=>{return this._renderRow(rowdata)}}
            />

        );
    }
    _renderRow(rowdata) {
        return (
            <View>
                <View>
                    <Text>{rowdata.description}</Text>
                </View>
                <View>
                    <View>
                    <Text>{rowdata.details}</Text>
                    </View>
                    <View>
                    <Text>{rowdata.check}</Text>
                    </View>
                    <View>
                    <Text>{rowdata.medicine}</Text>
                    </View>
                </View>
            </View>
        )

    }

    _isDataLoad() {
        console.log(this.state.caseData);
        if(this.state.caseData){
            return  this._classicCaseList()
        }
        else{
         return  this._NoclassicCase()
        }
    }

    _NoclassicCase(){
        return(
            <View style={styles.nocase}>
                <Image
                    source={require('../../images/me/casepage.png')}
                    style={{width:100,height:100}}
                />
                <View style={{paddingBottom:5}}>
                    <Text>您暂时没有经典病例,</Text>
                </View>
                <View>
                    <Text>请点击右上方添加按钮添加。</Text>
                </View>
            </View>
        )
    }

    postCaseData(){
        fetch(TypicalList_URL,{
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   doctor_id:this.props.doctorId
                })
          })
          .then((response) => {
               return response.json();
          })
          .then((responseData)=>{
            console.log(responseData);
            this.setState({
                caseData:responseData,
                dataSource:this.state.dataSource.cloneWithRows(responseData),
            })
          })
          .catch((err)=>{
              console.log(err.toString());
          })
          .done();
    };


  render() {
    return (
        <View>
            <BackTitle
                navigator={this.props.navigator}
                addBtn={true}
                title={'经典病例'} />
                {this._isDataLoad()}
        </View>
      );
  }
}
export default CaseHistory;
