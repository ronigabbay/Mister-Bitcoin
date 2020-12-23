import React from 'react'
import BitcoinService from '../services/BitcoinService.js'
import { Sparklines } from 'react-sparklines';
import { Chart } from '../cmps/Chart'

export default class StatisticPage extends React.Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null
    }

    componentDidMount() {
        this.getMarketPrice()
        this.getConfirmedTransactions()
    }

    async getMarketPrice() {
        var marketPrice = await BitcoinService.getMarketPrice()
        this.setState({marketPrice})
    }
    async getConfirmedTransactions() {
        var confirmedTransactions = await BitcoinService.getConfirmedTransactions()
        this.setState({confirmedTransactions})
    }

    render() {
        const {marketPrice, confirmedTransactions} = this.state
        return (
            <div>
               {marketPrice && confirmedTransactions && <Chart marketPrice={marketPrice} confirmedTransactions={confirmedTransactions} />}
            </div>
        )
    }
}
