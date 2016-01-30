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
} from 'react-native';

import Home from "./Home"
import ViewPager from 'react-native-scrollable-tab-view'
import BottomTabBar from './BottomTabBar'
class nuanxin extends Component {
  render() {
    return (
        <ViewPager tabBarPosition='bottom'  locked='true'  renderTabBar={()=><BottomTabBar />}>
          <View tabLabel='one'>
          <Home />
          </View>
            <View tabLabel='two'>
          <Text>two</Text>
          </View>
           <View tabLabel='three'>
          <Text>three</Text>
          </View>
           <View tabLabel='four'>
          <Text>four</Text>
          </View>
           <View tabLabel='five'>
          <Text>five</Text>
          </View>
        </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

  export default nuanxin;
