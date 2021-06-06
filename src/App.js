import React, {Component} from "react";
import './App.css';
import Board from './Board.js';
import ColourWheel from './ColourWheel.js';
import MoveBar from './MoveBar.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this._board = null;
    this._colourWheel = null;
    this._moveBar = null;
  }

  componentDidMount() {
    this._board.setColourWheel(this._colourWheel);
    this._board.setMoveBar(this._moveBar);
  }

  render() {
    return (<>
      <h1>Flood-It</h1>
      <div>
        <Board width={20} height={20} ref={(child) => {this._board = child}}/>
        <MoveBar moves={30} height={20*30} ref={(child) => {this._moveBar = child}}/>
      </div>
      <ColourWheel ref={(child) => {this._colourWheel = child}}/>
    </>);
  }
}