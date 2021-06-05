import React, {Component} from "react";
import './Board.css';

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

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            grid: [],
        };
    }

    componentDidMount(){
        const grid = getInitialGrid(this.state.width, this.state.height);
        this.setState({grid});
    }

    oob(row, col) {
        const {width, height} = this.state;
        return row < 0 || col < 0 || row >= height || col >= width;
    }

    floodFill_(grid, row, col, initialColour, newColour) {
        grid[row][col].colour = newColour; // TODO colour wheel

        for(let m = 1; m <= 7; m+=2) {
            let dr = Math.floor(m/3) - 1, dc = m%3 - 1;
            if(!this.oob(row+dr, col+dc) && grid[row+dr][col+dc].colour === initialColour) this.floodFill_(grid, row+dr, col+dc, initialColour, newColour);
        }
    }

    floodFill(row, col, initialColour) {
        let c = Math.floor(Math.random() * 6)+1;
        if(initialColour !== c) {
            let {grid} = this.state;
            this.floodFill_(grid, row, col, initialColour, c);

            this.setState({grid});
        }
    }

    render() {
        const {grid, width} = this.state;
        return (<div className="board">
            {grid.map((row, rowInd) => {
                return (<div key={rowInd} className="row">
                    {row.map((cell, colInd) => {
                        return <div className={colours[cell.colour] + " cell"} onClick={() => this.floodFill(cell.row, cell.col, cell.colour)} key={cell.row*width+cell.col}/>
                    })}
                </div>);
            })}
        </div>);
    }
};


const getInitialGrid = (width, height) => {
    const grid = [];
    for(let row = 0; row < height; row++) {
        const r = [];
        for(let col = 0; col < width; col++) {
            let c = Math.floor(Math.random() * 6)+1;
            r.push(createCell(col, row, c));
        }
        grid.push(r);
    }
    return grid;
};

const createCell = (col, row, colour) => {
    return ({
        col: col,
        row: row,
        colour: colour,
    });
};