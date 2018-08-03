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

type Props = DispatchProps & OwnProps;

class HeaderView extends React.Component<Props, State> {
  public render() {
    const { style } = this.props;
    return (
      <div
        style={style}
      >
      
      </div>
    );
  }
}

const wrapped = wrap(HeaderView, [
  connect(
    (state: AppState): DispatchProps => ({
      user: state.auth.user,
    }),
  )
]);

export { wrapped as HeaderView };
