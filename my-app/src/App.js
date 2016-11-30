import React, { Component } from 'react';
import Button from './Components/button'
import Result from './Components/result'
import './App.css';
import { Provider, connect } from 'react-redux'
import { addSymbol, setOperator, clearLastOperand,clearAll } from './AC/buttons'
import {NUMBER_1, NUMBER_2, NUMBER_3, NUMBER_4, NUMBER_5, NUMBER_6, NUMBER_7,
  NUMBER_8, NUMBER_9, NUMBER_0, AC,CE, MINUS, PLUS, MULTIPLY, DEVIDE, POINT, RESULT} from './constants'


class App extends Component {
  render() {
    const {addSymbol, setOperator, clearLastOperand,clearAll}=this.props
    return (
      <div className="calculator">
        <h3 className="name">CaLenaCulator</h3>
        <Result/>
        <div className="buttons-frame">
          <div className="buttons-raw">
            <Button operator={AC} command={clearAll} hasAltColor/>
            <Button operator={CE} command={clearLastOperand} hasAltColor/>
            <Button operator={DEVIDE} command={()=>setOperator(DEVIDE)} />
            <Button operator={MULTIPLY} command={()=>setOperator(MULTIPLY)} />
          </div>
          <div className="buttons-raw">
            <Button operator={NUMBER_7} command={()=>addSymbol(NUMBER_7)}/>
            <Button operator={NUMBER_8} command={()=>addSymbol(NUMBER_8)}/>
            <Button operator={NUMBER_9} command={()=>addSymbol(NUMBER_9)}/>
            <Button operator={MINUS} command={()=>setOperator(MINUS)} />
          </div>
          <div className="buttons-raw">
            <Button operator={NUMBER_4} command={()=>addSymbol(NUMBER_4)}/>
            <Button operator={NUMBER_5} command={()=>addSymbol(NUMBER_5)}/>
            <Button operator={NUMBER_6} command={()=>addSymbol(NUMBER_6)}/>
            <Button operator={PLUS} command={()=>setOperator(PLUS)}/>
          </div>
          <div className="buttons-raw">
            <Button operator={NUMBER_1} command={()=>addSymbol(NUMBER_1)}/>
            <Button operator={NUMBER_2} command={()=>addSymbol(NUMBER_2)}/>
            <Button operator={NUMBER_3} command={()=>addSymbol(NUMBER_3)}/>
            <Button operator={POINT} command={()=>addSymbol(POINT)}/>
          </div>
          <div className="buttons-raw">
            <Button operator={NUMBER_0} command={()=>addSymbol(NUMBER_0)}/>
            <Button operator={RESULT} command={()=>setOperator(RESULT)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {setOperator, addSymbol, clearLastOperand, clearAll}
)(App);
