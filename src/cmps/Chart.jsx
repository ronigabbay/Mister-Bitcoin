import React from 'react'
import { Sparklines, SparklinesLine  } from 'react-sparklines';

export function Chart({ marketPrice, confirmedTransactions }) {
    
    function MarkertPriceVal() {
       const values = marketPrice.values.map(value => value = value.y)
       return values
    }
    function confirmedTransactionsVal() {
       const values = confirmedTransactions.values.map(value => value = value.y)
       return values
    }
    return (
        <div className="chart-container" >
            <div className="chart chart-marketPrice" >
                <h2>{marketPrice.name}</h2>
                <Sparklines className="Sparklines" data={MarkertPriceVal()} limit={100} width={200} height={55} margin-bottom={5}>
                <SparklinesLine color="black" />
                </Sparklines>
                <h4>{marketPrice.description}</h4>
            </div>
            <div className=" chart chart-confirmedTransactions">
                <h2>{confirmedTransactions.name}</h2>
                <Sparklines className="Sparklines" data={confirmedTransactionsVal()} limit={100} width={200} height={55} margin-bottom={5} >
                <SparklinesLine color="black" />
                </Sparklines>
                <h4>{confirmedTransactions.description}</h4>
            </div>
        </div>
    )
}