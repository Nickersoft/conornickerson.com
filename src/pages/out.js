import React, { PureComponent } from 'react'

class OutNavigator extends PureComponent {
  componentDidMount() {
    const { location } = this.props;
    const { href } = location;
    const url = decodeURIComponent(href);
    const destination = /url=(.+)/.exec(url)[1];

    window.location.replace(destination);
  }

  render() {
    return <div></div>;
  }
}

export default OutNavigator
