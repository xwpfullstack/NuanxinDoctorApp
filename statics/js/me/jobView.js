'use strict';
import styles from './styles'
import React, {
  Component,
  Text,
  View,
} from 'react-native';
import Modal from 'react-native-root-modal';
var Doctor_Message = [
    {name: '李宁', age: '40', title:'主治医师', hospital:'齐鲁医院', department:'神经内科',tel:'12312312311',
    memo:'周日休息，不接待患者,有任何问题可以转到下周安排，及时通告患者，谢谢合作。',price:49,},
];
//
var worktime = [[1,0,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,1],[1,0,0]];
var showWktime = new Array(7);
for (let i = 0; i<showWktime.length; i++)
    showWktime[i]=new Array(3);
for(let i = 0; i<7; i++){
    for(let j=0; j<3; j++){
        showWktime[i][j] = worktime[i][j] ? '#F08300' : '#fff';
    }
}

class JobView extends Component {
  render() {
      var dctmsg = Doctor_Message[0];
    return (
        <View style={styles.tablebody}>
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
                <View style={[styles.table,{backgroundColor:showWktime[0][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[1][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[2][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[3][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[4][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[5][0]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[6][0],borderRightWidth:1}]}></View>
            </View>
            <View  style={styles.container}>
                <View style={styles.table}><Text>下午</Text></View>
                <View style={[styles.table,{backgroundColor:showWktime[0][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[1][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[2][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[3][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[4][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[5][1]}]}></View>
                <View style={[styles.table,{backgroundColor:showWktime[6][1],borderRightWidth:1}]}></View>
            </View>
            <View  style={styles.container}>
                <View style={[styles.table,{borderBottomWidth:1}]}><Text>晚上</Text></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[0][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[1][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[2][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[3][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[4][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[5][2]}]}></View>
                <View style={[styles.table,{borderBottomWidth:1,backgroundColor:showWktime[6][2],borderRightWidth:1}]}></View>
            </View>



        </View>
      );
  }
}
export default JobView;
