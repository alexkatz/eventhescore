import * as React from 'react';
import { FacebookLoginButton } from "./FacebookLoginButton";
import { Constants } from '../shared/constants';
import { GoogleLoginButton } from "./GoogleLoginButton";
import { authenticate } from './action';
import { connect } from 'react-redux';
import { wrap } from '../shared/utilities';
import { AuthPayload } from '../auth/AuthPayload';

const BUTTON_PADDING = 20;

interface OwnProps {

}

interface DispatchProps {
  authenticate?: typeof authenticate;
}

interface State {
  isLoggingIn: boolean;
}

type Props = OwnProps & DispatchProps;

class LoginView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggingIn: false,
    }
  }

  public render() {
    const { isLoggingIn } = this.state;
    return (
      <div
        style={{
          flex: 'auto',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontFamily: 'Open Sans, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,
            fontSize: Constants.FontSize.XLarge,
            fontWeight: Constants.FontWeight.Light,
          }}
        >
          Even the Score
        </div>
        {
          [
            <FacebookLoginButton
              appId={'220096918457019'}
              style={{ boxShadow: Constants.BoxShadow.NORMAL }}
              onAuthenticate={this.onAuthenticate}
              height={Constants.LoginButtonDimensions.HEIGHT}
              width={Constants.LoginButtonDimensions.WIDTH}
              disabled={isLoggingIn}
            />,
            <GoogleLoginButton
              clientId={'672486559969-afdpgoahamkhtfb2f63p5ptrdvrqjo3q.apps.googleusercontent.com'}
              style={{ boxShadow: Constants.BoxShadow.NORMAL }}
              onAuthenticate={this.onAuthenticate}
              height={Constants.LoginButtonDimensions.HEIGHT}
              width={Constants.LoginButtonDimensions.WIDTH}
              disabled={isLoggingIn}
            />
          ]
            .map((loginButton, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: BUTTON_PADDING,
                }}
              >
                {loginButton}
              </div>
            ))
        }
      </div>
    );
  }

  private onAuthenticate = async (authPayload: AuthPayload) => {
    try {
      const { authenticate } = this.props;
      this.setState({ isLoggingIn: true });
      await authenticate(authPayload);
    } catch (error) {
      this.setState({ isLoggingIn: false });
      alert("Error logging in! Try again.");
    }
  }
}

const wrapped = wrap(LoginView, [
  connect(
    null,
    {
      authenticate,
    }
  ),
]);

export { wrapped as LoginView };
