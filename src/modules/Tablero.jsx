import React from 'react'

const Tablero = ({size}) => {
    const rows = 8
    const cols = 8

    const colors = [
        '#ded7c5',
        '#171717'
    ];

    return(
        <div id="tablero" style={{width: size, height: size, border: '1px solid black'}}>
            {Array(rows).fill(0).map((row, i) => (
                <tr style={{width: size, height: size / rows}}>
                    {Array(cols).fill(0).map((col, j) => (
                        <td style={{backgroundColor: colors[(i + j) % 2], width: size / cols, height: '100%'}}></td>
                    ))}
                </tr>
            ))}
        </div>
    )
}

export default Tablero