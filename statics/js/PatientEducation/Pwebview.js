'use strict';
import React, {
  Component,
  StyleSheet,
  Dimensions,
  WebView,
  ProgressBarAndroid
} from 'react-native';

import Loading from '../patient/Loading';

class Pwebview extends Component{
  constructor(){
    super();
 };

renderLoading(){
    return (
          <Loading />
    );
}


  render(){
          return (
                   <WebView
                          ref='webView'
                          automaticallyAdjustContentInsets={false}
                          style={styles.webView}
                          source={{uri: this.props.data.link}}
                          javaScriptEnabled={true}
                          domStorageEnabled={true}
                          decelerationRate="normal"
                          renderLoading={()=>this.renderLoading()}
                          onNavigationStateChange={this.onNavigationStateChange}
                          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                          startInLoadingState={true}
                          scalesPageToFit={true} />
            );
    };

};
const styles = StyleSheet.create({
    webView:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

  export default Pwebview;
