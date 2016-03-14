'use strict'

import style from './styles';

import React, {
  Alert,
  Component,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';


class ModelTable extends Component {
  constructor(props) {
    super(props);
  }

  eatTime(data, value) {
      let times = ['早','中','晚','睡前'];
      let tmp =  [];
      let mount = 0;
      for (var i = 0; i < data.length;++i) {
          if (data[i]!='0') {
              mount = data[i];
              tmp.push(times[i]);
          }
      }
      if(value)
        return tmp.join(',')
      else {
          return mount;
      }
  }

  render() {
    return (
        <View style={{padding:10}}>
        <View><Text>{this.props.recordData[0].template_name}</Text></View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.modelTableTitLine}>
                    <Text style={{color:'#FFF', fontSize:14}}>开始时间</Text>
                </View>
                <View style={styles.modelTableTitLine}>
                    <Text style={{color:'#FFF', fontSize:14}}>每次用量</Text>
                </View>
                <View style={styles.modelTableTitLine}>
                    <Text style={{color:'#FFF', fontSize:14}}>服用天数</Text>
                </View>
                <View style={{
                    flex:1.5,
                    alignItems:'center',
                    backgroundColor:'#FE9300',
                    height:25
                }}>
                    <Text style={{color:'#FFF', fontSize:14}}>服用时间</Text>
                </View>
            </View>
            {
                this.props.recordData.map((pres, index)=>(
                    <View key = {index} style={{flexDirection:'row'}}>
                        <View style={styles.modelTableLine}>
                            <Text>{pres.begin}</Text>
                        </View>
                        <View style={styles.modelTableLine}>
                            <Text>{pres.days}</Text>
                        </View>
                        <View style={styles.modelTableLine}>
                            <Text>{this.eatTime(pres.dosage, 0)}</Text>
                        </View>
                        <View style={{
                            flex:1.5,
                            alignItems:'center',
                            borderWidth:1,
                            borderTopWidth:0,
                            borderColor:'#FE9300',
                            height:23,
                        }}>
                            <Text>{this.eatTime(pres.dosage, 1)}</Text>
                        </View>
                    </View>
                ))
            }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modelTableTitLine: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#FE9300',
        height:25,
    },
    modelTableLine:{
        flex:1,
        alignItems:'center',
        borderWidth:1,
        borderTopWidth:0,
        borderColor:'#FE9300',
        borderRightWidth:0,
        height:23,
    }
});

export default ModelTable;
