import React from 'react'
import moment from 'moment';
import _vars from '../assets/styles/setup/_vars.scss'

export function MovesList({title, moveList}) {

    console.log(title);
    console.log(moveList);
    return (
        <div className="MoveList" >
            {title === 'Your Moves' && <h2 className="your-moves" >Your Moves</h2> }
           {title === 'Your Moves'  && <ul>
                {
                     moveList.map(move => <li className ="move-details-details" key={move.at} ><h3>At: {moment(move.at).format('MMMM Do YYYY, h:mm:ss a')}</h3> <h3>Amount: {move.amount}</h3>  </li> )
                }
            </ul>} 
            {title === 'Your Last Moves' && <h2 className="your-moves-home" >Your Last Moves</h2> }
           {title === 'Your Last Moves'  &&  <ul>
                {
                     moveList.map(move => <li className ="move-details-home" key={move.at} > <h3>To: {move.to} </h3> <h3>At: {moment(move.at).format('MMMM Do YYYY, h:mm:ss a')}</h3> <h3>Amount: {move.amount}</h3>  </li> )
                }
            </ul>}
        </div>

    )
}