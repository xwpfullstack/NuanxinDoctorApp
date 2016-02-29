'use strict';
import styles from './styles';
import DrugList from './drugList';

import React, {
  Component,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

var COLOR=['#DC5947','#6C6CC6','#53AD55','#DC5947',];

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

function GetRandomNum(Min,Max)
{
var Range = Max - Min;
var Rand = Math.random();
return(Min + Math.round(Rand * Range));
}

var num = GetRandomNum(1,3);

var tempData=[{
        A:['奥斯平','艾弗森','艾克'],
        B:['巴基斯坦','巴拿马','巴勒斯坦'],
        C:['朝鲜','查尔斯','查案'],
        S:['森海塞尔','舒尔'],
        Z:['中国','众泰','中兴']
    },
];

var AAA='森海塞尔';
/*
<View>
  <View style={{backgroundColor:'#F0F0F0',paddingLeft:5,}}><Text>{String.fromCharCode(WORD)}</Text></View>
  <TouchableOpacity style={styles.drugTouch}>
      <View style={styles.drugLine}>
          <View style={styles.drugLogo}>
              <Text style={{fontSize:23,color:'#fff'}}>{AAA[0]}</Text>
          </View>
          <View><Text style={{fontSize:18, color:'#000'}}>{AAA}</Text></View>
      </View>
  </TouchableOpacity>
</View>
 */

class Prescription extends Component {
  render() {
    return (
        <View>
            <View style={styles.headNav}>
                <TouchableOpacity
                style={styles.back}
                onPress= {() => {this.props.navigator.pop()}}>
                    <Image style={styles.headImg}
                    source = {require('../../images/me/back.png')} />
                    <Text style={[styles.textBold,{fontSize:15}]}>返回</Text>
                </TouchableOpacity>
                <View style={styles.headMenu}><Text style={styles.textBold}>我的药方</Text></View>
            </View>
            <ScrollView style={{height:WINDOW_HEIGHT-70}}>
                <DrugList navigator={this.props.navigator}/>
            </ScrollView>
        </View>

      );
  }
}
export default Prescription;
