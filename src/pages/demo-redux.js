//pagination from https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/registration/RegistrationList.js
import React from 'react';
import { connect } from "react-redux"
import { toggleDarkMode } from '../state/app'

function DemoRedux(props) {
  return <div>
            <p>Dark Mode: {props.isDarkMode? "DARK":"LIGHT"}</p>
          <button onClick={()=>{props.dispatch(toggleDarkMode(!props.isDarkMode))}}>Toggle</button>
  </div>
}

export default connect(state => ({
    isDarkMode: state.app.isDarkMode
  }), null)(DemoRedux);