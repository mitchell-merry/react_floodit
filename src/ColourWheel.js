import React, {Component} from "react";
import "./App.css";
import {colours} from "./helper.js";

export default class ColourWheel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColour: 1,
        };
    }

    selectColour(col) {
        this.setState({
            currentColour: col
        });
    }

    render() {
        const {currentColour} = this.state;
        return <div className="colourWheel">
            {colours.map((colour, i) => {
                return (i !== 0 ? 
                <div className={"colourOption " + colour + (i === currentColour ? " colourOptionSel" : "")} 
                     key={i} onMouseDown={() => {this.selectColour(i)}}></div> 
                : null);
            })}
        </div>;
    }
}