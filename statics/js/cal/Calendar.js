'use strict'

import React, {
  Alert,
  Component,
  Text,
  View,
} from 'react-native';

import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type=='weekly'){
      return (
        <CalendarWeek changeType={this.props.changeType}/>
      );
    }
    else if(this.props.type=='monthly'){
      return (
        <CalendarMonth changeType={this.props.changeType}/>
      );
    }
  }
}

export default Calendar;
