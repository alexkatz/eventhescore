import * as React from 'react';
import { wrap } from '../shared/utilities';
import { connect } from 'react-redux';
import { AppState } from '../store/state';
import { User } from '../auth/User';

interface OwnProps {
  style?: React.CSSProperties;
}

interface DispatchProps {
  user?: User;
}

interface State {

}

type Props = OwnProps & DispatchProps;

class HomeView extends React.Component<Props, State> {
  public render() {
    const { user, style } = this.props;
    return (
      <div
        style={{
          ...style,
        }}
      >
      </div>
    );
  }
}

const wrapped = wrap(HomeView, [
  connect(
    (state: AppState): DispatchProps => ({
      user: state.auth.user,
    }),
  ),
]);

export { wrapped as HomeView };
