import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import OnBoardScreen from './OnBoardScreen';

export default class RootScreen extends Component {
  state = {
    showLogin: false,
  };

  navigateToLoginScreen = () => this.setState({showLogin: true});
  navigateToOnboardScreen = () => this.setState({showLogin: false});

  render() {
    return (
      <>
        {this.state.showLogin ? (
          <LoginScreen navigateToOnboardScreen={this.navigateToOnboardScreen} />
        ) : (
          <OnBoardScreen navigateToLoginScreen={this.navigateToLoginScreen} />
        )}
      </>
    );
  }
}