import React, { Component } from 'react';
import Button from './Components/button'
import Result from './Components/result'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="calculator">
        <h3 className="name">CaLenaCulator</h3>
        <Result/>
        <div className="buttons-frame">
          <div className="buttons-raw">
            <Button className="button red" operator="AC"/>
            <Button className="button red" operator="CE"/>
            <Button operator="/"/>
            <Button operator="*"/>
          </div>
          <div className="buttons-raw">
            <Button operator="7"/>
            <Button operator="8"/>
            <Button operator="9"/>
            <Button operator="-"/>
          </div>
          <div className="buttons-raw">
            <Button operator="4"/>
            <Button operator="5"/>
            <Button operator="6"/>
            <Button operator="+"/>
          </div>
          <div className="buttons-raw">
            <Button operator="1"/>
            <Button operator="2"/>
            <Button operator="3"/>
            <Button operator="."/>
          </div>
          <div className="buttons-raw">
            <Button operator="0"/>
            <Button operator="="/>
          </div>
        </div>
      </div>
        </Provider>
    );
  }
}

export default App;
