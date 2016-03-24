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
import DoctorRegist from './statics/js/login/DoctorRegist';
import DoctorMainScreen from './statics/js/public/DoctorMainScreen';
import DoctorLogIn from './statics/js/login/DoctorLogIn';
import ModifyPwd from './statics/js/login/DoctorModifyPwd';
import OrderDetails from './statics/js/cal/OrderDetails';
import NewsDetails from './statics/js/cal/NewsDatails';
import AddOrder from './statics/js/patient/AddOrder';
import DoctorRecord from  './statics/js/patient/DoctorRecord';
import WriteTable from './statics/js/patient/WriteTable';
import AddDianosis from './statics/js/patient/AddDiagnosis';
import AddMedcine from './statics/js/patient/AddMedcine';
import ModifyPrescription from './statics/js/patient/ModifyPrescription';
import CompleteRecord from './statics/js/patient/CompleteRecord';
import OrderList from './statics/js/patient/OrderListIso';
import CaseHistory from './statics/js/me/caseHistory';
import AddCase from './statics/js/me/addCase';
import WebMainPage from './statics/js/me/webView';
import DoctorMsgEdit from './statics/js/me/doctorMsgEdit';
import Prescription from './statics/js/me/prescription';
import DrugDetailed from './statics/js/me/drugDetailed';
import ChangePhoto from './statics/js/me/changePhoto';
import AddLessons from './statics/js/PatientEducation/addLessons';
import MedineOrder from './statics/js/patient/MedineOrder';
import AddMedModel from './statics/js/me/addMedModel';
import CreatePage from  './statics/js/PatientEducation/CreatePage';
import ManagerPage from './statics/js/PatientEducation/ManagerPage';
import Manager from './statics/js/PatientEducation/Manager';

var _navigator;
//监听硬件返回功能
BackAndroid.addEventListener('hardwareBackPress', ()=>{
  if(_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
})

var doctorId;
var doctorNum;
var diags;
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
   * myMessage: 医生详情页
   ***************************/
  RouteMapper(route,navigator) {
    _navigator=navigator;
    switch(route.name){
      case 'logIn':
        return  <DoctorLogIn navigator={navigator}/>;
        break;
      case 'doctorHomePage':
        doctorId=route.doctorId;
        doctorNum=route.doctorNum;
        return  <DoctorMainScreen navigator={navigator} doctorId={route.doctorId}/>;
        break;
      case 'modifyPwd':
        return  <ModifyPwd navigator={navigator} />;
        break;
      case 'regist':
        return <DoctorRegist navigator={navigator}/>;
        break;
      case 'addOrder':
        diags=route.diags;
        return  <AddOrder patientId={route.patientId} doctorId={doctorId} diags={route.diags} navigator={navigator}/>;
        break;
      case 'DoctorRecord':
        return  <DoctorRecord navigator={navigator} doctorId={doctorId} patientName={route.patientName} openid={route.openid}/>;
        break;
      case 'WriteTable':
        return  <WriteTable navigator={navigator} openid={route.openid} doctorId={doctorId}/>;
        break;
      case 'prescription':
        return  <Prescription navigator={navigator} doctorId={doctorId}/>;
        break;
      case 'doctorMsgEdit':
        return  <DoctorMsgEdit navigator={navigator} doctorId={doctorId}/>;
        break;
      case 'webMainPage':
        return  <WebMainPage navigator={navigator} doctorId={doctorId}/>;
        break;
      case 'addDianosis':
        return  <AddDianosis diags={diags}  pushLoad={(data)=>route.pushLoad(data)}  doctorId={doctorId} navigator={navigator}/>;
        break;
      case 'addMedcine':
        return  <AddMedcine postSick={route.postSick} diags={diags} doctorId={doctorId} navigator={navigator}/>;
        break;
      case 'orderDetails':
        return  <OrderDetails navigator={navigator} orderData={route.passProps}/>;
        break;
      case 'newsDetails':
        return  <NewsDetails navigator={navigator} newsData={route.passProps} deleteNews={route.deleteNews}/>;
        break;
      case 'modifyPrescriptionPage':
        return  <ModifyPrescription navigator={navigator} passProps={route.passProps}/>;
        break;
      case 'completeRecord':
        return  <CompleteRecord navigator={navigator} doctorId={doctorId} patientId={route.patientId}/>;
        break;
      case 'orderList':
        return  <OrderList navigator={navigator} doctorId={doctorId}/>;
        break;
      case 'drugDetailed':
        return <DrugDetailed
            doctorId={doctorId}
            drugId={route.drugId}
            medname={route.drugName}
            navigator={navigator} />;
            break;

      case 'changePhoto':
        return <ChangePhoto
            navigator={navigator}
            doctorId={doctorId}
            doctorNum={doctorNum}
            checkPage={route.func}
          /> 
        break;
      case 'addMedModel':
        return <AddMedModel
            carryData={route.carryData}
            doctorId={doctorId}
            navigator={navigator} />
            break;
      case 'caseHistory':
        return <CaseHistory navigator={navigator} doctorId={doctorId}/>;
        break;
      case 'addCase':
        return <AddCase doctorId={doctorId} navigator={navigator} />;
        break;
        case 'AddLessons':
            return <AddLessons doctorId={doctorId} navigator={navigator}/>
        break;
        case 'MedineOrder':
            return <MedineOrder doctorId={doctorId} backMain={route.back} navigator={navigator} datas={route.datas} />
          break;
          case 'CreatePage':
            return <CreatePage doctorId={doctorId} diags={route.diags} navigator={navigator} />
          break;
          case 'ManagerPage':
            return <ManagerPage doctorId={doctorId} diags={route.diags} navigator={navigator} />
          break;
           case 'Manager':
            return <Manager doctorId={doctorId} diag={route.diag} navigator={navigator} />
          break;
    };
  };

  InitialRouteName() {
    storage.load({
      key: 'loginState',
      autoSync: true,
      syncInBackground: true,
    }).then( ret => {
      if(ret.state === 'success') {   //success
        this.setState({
          routeInfo:{
            name: 'doctorHomePage',
            doctorId: ret.userId,
            doctorNum: ret.num,
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
