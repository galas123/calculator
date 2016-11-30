import React, {
  Component,
  PropTypes,
} from 'react';
import { AC,CE} from '../constants'

import cx from 'classnames'

export default class Button extends Component {

  render() {
    const {operator, hasAltColor}=this.props;
    return (
      <button className={cx('button',{'button_alt-color':hasAltColor})} onClick={this.clickCalcButton}>{operator}</button>
    );
  }

  clickCalcButton = (ev) => {
    const {command}=this.props;
    ev.preventDefault()
    command()
  }
}




