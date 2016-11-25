import React, {
  Component,
  PropTypes,
} from 'react';
import { addSymbol, setOperator, clearLastOperand,clearAll } from '../AC/buttons'
import { connect } from 'react-redux'

class Button extends Component {
  render() {
    const {operator}=this.props
    return (
      <button className="button" onClick={this.clickCalcButton}>{operator}</button>
    );
  }

  clickCalcButton = (ev) => {
    ev.preventDefault()
    const {operator, setOperator, addSymbol, clearLastOperand, clearAll}=this.props
    console.log('buttonClick', operator)
    if ('+-*/='.indexOf(operator) !== -1) {
      setOperator(operator)
    }
    else {
      switch (operator) {
        case 'AC':
          clearAll()
          break

        case 'CE':
          clearLastOperand()
          break

        default:
          addSymbol(operator)
      }
    }
  }
}

export default connect(
  (store)=>({show:store.calculator.show}),
  {setOperator, addSymbol, clearLastOperand, clearAll}
)(Button);


