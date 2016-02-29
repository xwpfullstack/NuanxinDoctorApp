'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-root-modal';

var WINDOW_WIDTH = Dimensions.get('window').width;
var worktime = [[1,0,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,1],[1,0,0]];
var showWktime = new Array(7);

for (let i = 0; i<showWktime.length; i++)
    showWktime[i]=new Array(3);
for(let i = 0; i<7; i++){
    for(let j=0; j<3; j++){
        showWktime[i][j] = worktime[i][j] ? '#F08300' : '#fff';
    }
}

class JobViewEdit extends Component {
  render() {
    return (
        <View style={{backgroundColor:'#fff'}}>
            <View  style={styles.container}>
                <View style={styles.table}></View>
                <View style={styles.table}><Text>周一</Text></View>
                <View style={styles.table}><Text>周二</Text></View>
                <View style={styles.table}><Text>周三</Text></View>
                <View style={styles.table}><Text>周四</Text></View>
                <View style={styles.table}><Text>周五</Text></View>
                <View style={styles.table}><Text>周六</Text></View>
                <View style={[styles.table,{borderRightWidth:1}]}><Text>周日</Text></View>
            </View>
            <View  style={styles.container}>
                <View style={styles.table}><Text>上午</Text></View>
                <TouchableOpacity
                    style={[styles.table,{backgroundColor:showWktime[0][0]}]}
                >
                </TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[1][0]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[2][0]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[3][0]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[4][0]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[5][0]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[6][0],borderRightWidth:1}]}></TouchableOpacity>
            </View>
            <View  style={styles.container}>
                <View style={styles.table}><Text>下午</Text></View>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[0][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[1][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[2][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[3][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[4][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[5][1]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{backgroundColor:showWktime[6][1],borderRightWidth:1}]}></TouchableOpacity>
            </View>
            <View  style={styles.container}>
                <View style={[styles.table,{borderBottomWidth:1}]}><Text>晚上</Text></View>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[0][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[1][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[2][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[3][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[4][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[5][2]}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[6][2],borderRightWidth:1}]}></TouchableOpacity>
            </View>



        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems: 'center',
    },
    table: {
      borderColor:'#A7A7A7',
      borderTopWidth:1,
      borderLeftWidth:1,
      alignItems: 'center',
      justifyContent: 'center',
      height:25,
      flex:0.1,
    },
});
export default JobViewEdit;
