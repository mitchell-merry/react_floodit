import React, { Component } from "react";
import "./App.css";

export default class MoveBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalMoves: props.moves,
            movesLeft: props.moves,
            height: props.height,
        }
    }

    componentDidMount() {

    }

    updateMoves() {
        let {movesLeft} = this.state;
        movesLeft -= 1;
        this.setState({movesLeft});
    }
    
    render() {
        const {totalMoves, movesLeft, height} = this.state;
        let h = (height + 2 - 10 - totalMoves*2)/totalMoves; // kinda hardcoded but what are u gonna do about it

        return (<div className="moveBar">
            {Array.from({length: totalMoves}, (_, i) => (
                <div className={"moveBarCell" + ((totalMoves-movesLeft < i+1) ? " moveBarCellActive" : "")} 
                     key={i} style={{height: h}}><div className="moveBarText">{
                         (i === totalMoves-movesLeft) ? movesLeft : ""
                     }</div></div>
            ))}
        </div>);
    }
}