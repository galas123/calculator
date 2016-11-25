import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux'

class Result extends Component {
  render() {

    const {show,exp}=this.props
    
    return (
        <div className="result-window">
          <div>{show}</div>
          <div className="hint">{exp}</div>
        </div>
    );
  }
}


export default connect((state) => ({
  show: state.calculator.show,
  exp: [state.calculator.leftOperandHint,state.calculator.operatorHint,state.calculator.rightOperandHint].join('')
}))(Result);

