import React, {Component} from "react";
import './Cell.css';

const colours = [
    "",
    "cell-red",
    "cell-orange",
    "cell-yellow",
    "cell-green",
    "cell-blue",
    "cell-purple"
];

export default class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            col: props.col,
            row: props.row,
            colour: props.colour,
        };
    }

    componentDidMount() {

    }

    render() {
        return (<div className={colours[this.state.colour] + " cell"} 
                    onClick={() => this.props.floodFill(this.state.col, this.state.row, this.state.colour)}
        />);
    }
}