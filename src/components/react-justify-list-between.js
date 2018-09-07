import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    const { className, ...props } = this.props;
    return (
      <section className={classNames('webkit-sassui-justify-list-between react-justify-list-between', className)} {...props} />
    );
  }
}
