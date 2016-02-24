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
  BackAndroid,
  Navigator,
  Alert,
} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import Srorage from './statics/js/public/Storage';
import SplashScreen from './statics/js/login/SplashScreen';
import DoctorMainScreen from './statics/js/public/DoctorMainScreen';
import DoctorLogIn from './statics/js/login/DoctorLogIn';
import ModifyPwd from './statics/js/login/DoctorModifyPwd';
import OrderDetails from './statics/js/cal/OrderDetails';
import NewsDetails from './statics/js/cal/NewsDatails';

var _navigator;
//监听硬件返回功能
BackAndroid.addEventListener('hardwareBackPress', ()=>{
  if(_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
})

class NuanXinDoctorApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      pageLoading: false,
      routeInfo: {},
    }
  }

  //设置定时器，2秒后更新state
  componentDidMount() {
    this.timer=setTimeout(
      ()=>{
        this.setState({pageLoading: true});
      },
      1000,
    );
    this.InitialRouteName();
  }

  //清空定时器
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  /****************************
   * param: route导航器路由信息，
   * navigator导航器对象，用来切换页面
   * return: 渲染页面
   * logIn: 登陆页面
   * doctorHomePage: app主页
   * patientInfo: 患者信息页面
   ***************************/
  RouteMapper(route,navigator) {
    _navigator=navigator;
    if(route.name === 'logIn') {
      return (
        <DoctorLogIn navigator={navigator}/>
      )
    }else if(route.name === 'doctorHomePage') {
      return (
        <DoctorMainScreen navigator={navigator} doctorId={route.doctorId}/>
      )
    }else if(route.name === 'modifyPwd') {
      return (
        <ModifyPwd navigator={navigator} />
      )
    }else if(route.name === 'orderDetails') {
      return (
        <OrderDetails navigator={navigator} orderData={route.passProps}/>
      )
    }else if(route.name === 'newsDetails') {
      return (
        <NewsDetails navigator={navigator} newsData={route.passProps}/>
      )
    }/*else if(route.name === 'patientInfo') {
      return (
        <PatientInfo navigator={navigator}/>
      )
    }*/
  }

  InitialRouteName() {
    storage.load({
      key: 'loginState',
      autoSync: true,
      syncInBackground: true,
    }).then( ret => {
      if(ret.state === 'success') {
        this.setState({
          routeInfo:{
            name: 'doctorHomePage',
            doctorId: ret.userId,
          }
        })
      }else{
        this.setState({
          routeInfo:{
            name: 'logIn',
          }
        })
      }
    }).catch ( err => {
      this.setState({
        routeInfo:{
          name: 'logIn',
        }
      })
    })
  }

  render() {
    if(this.state.pageLoading) {
      return (
        <Navigator
          style={styles.container}
          initialRoute={this.state.routeInfo}
          configureScene={() => {return Navigator.SceneConfigs.FadeAndroid}}
          renderScene={(route,navigator) => {return this.RouteMapper(route,navigator)}}
        />
      )
    };
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('NuanXinDoctorApp', () => NuanXinDoctorApp);
