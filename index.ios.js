/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import TcombForm from 'tcomb-form-native';

const Form = TcombForm.form.Form;

const User = TcombForm.struct({
  username: TcombForm.String,
  password: TcombForm.String
});

let formOptions = {
  fields: {
    username: {
      autoCapitalize: "none",
      autoCorrect: false
    },
    password: {
      autoCapitalize: "none",
      autoCorrect: false
    }
  }
};

class waitlisted_mobile extends Component {
  onPress() {
    let loginForm = this.refs.loginForm.getValue();
    if (loginForm) {
      console.log(loginForm);
      fetch("https://hq.app.waitlisted.dev/api/v2/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
          'Host': 'hq.app.waitlisted.dev'
        },
        body: JSON.stringify(loginForm)
      }).then(function(data) {
        console.log(data)
      }).catch(function(error) {
        console.log("ERROR", error)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="loginForm"
          type={User}
          options={formOptions}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    padding: 20,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('waitlisted_mobile', () => waitlisted_mobile);
