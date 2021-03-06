import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import config from '../config.json'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loginStatus: null,
      user: null
    }
  }

  loginSucceed (user) {
    this.props.changeLoginStatus('connected')
    this.props.changeUser(user)
  }

  loginFailed (response) {
    this.props.changeLoginStatus(response.status)
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId={config.facebook.appId}
          autoLoad={true}
          fields="name,email,picture"
          callback={this.loginSucceed.bind(this)}
          onFailure={this.loginFailed.bind(this)}
          textButton="&nbsp;Login with Facebook"
          cssClass="button"
          icon="fa-facebook-official"/>
      </div>
    )
  }
}

Login.propTypes = {
  changeLoginStatus: PropTypes.func,
  changeUser: PropTypes.func
}

export default Login
