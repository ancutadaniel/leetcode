import React, { useState, useRef } from 'react';
import './XoGame.css';
import _ from 'lodash'

const XoGame = () => {
    const [xoState, setXoState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const currentPlayer =  useRef('X')

    const playXO = (row, column) => {
        const newXoState = _.cloneDeep(xoState)

        if(newXoState[row][column] === '') {

            newXoState[row][column] = currentPlayer.current;

            if(currentPlayer.current === 'X') {
                currentPlayer.current = '0'
            } else {
                currentPlayer.current = 'X'
            }

        }

        setXoState(newXoState)

        if(hasWin(currentPlayer.current, xoState)) {
            alert(`${currentPlayer.current} has win`)
        }

        if(xoState[row][column] !== '') {
            alert('is equality')
        }

    };

    const hasWin = (player,xoState) => {
        // lines
        for(let row = 0; row < 3; row++) {
            if(player === xoState[row][0] &&
                player === xoState[row][1] &&
                player === xoState[row][2]
            )
                return true
        }

        // column
        for(let column = 0; column < 3; column++) {
            if( player === xoState[0][column] &&
                player === xoState[1][column] &&
                player === xoState[2][column]
            )
                return true
        }

        //diagonals
        if(player === xoState[0][0] && player === xoState[1][1] && player === xoState[2][2]) {
            return true
        }

        if(player === xoState[0][2] && player === xoState[1][1] && player === xoState[2][0]) {
            return true
        }
        return false
    }

    const drawCell = () => {
        let newCell = [];

        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                newCell.push(
                    <div
                        key={[row].concat([column])}
                        className='cell'
                        style={{gridRowStart: row + 1, gridColumnStart: column + 1}}
                        onClick={() => playXO(row, column)}
                    >
                        {xoState[row][column]}
                    </div>
                )
            }
        }
        return newCell

    };

    return (
        <div className='main'>
            <h1> Play XO Game </h1>
            <div className='tableArea'>
                {drawCell()}
            </div>
        </div>
    );
};

export default XoGame;