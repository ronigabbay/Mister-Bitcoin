import React from 'react'
import utilService from '../services/util-service.js'
import userService from '../services/UserService.js'


export default class TransferFund extends React.Component {
    state = {
        user: null,
        amount: ''
    }

    componentDidMount() {
        this.state.user = userService.getUser()
        console.log(this.state.user);
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const value =  +ev.target.value 
        this.setState({amount: value}, () => {
            console.log(this.state.amount);
        })
    }

    onTransfer = (ev) => {
        ev.preventDefault()
        var user = this.state.user
        if(this.state.amount <= user.coins) {
            user.coins -= this.state.amount
            console.log(user);
            user.moves.push(userService.addMove(this.props.contact, this.state.amount))
            userService.saveUser(user)
           console.log(this.props);
        }
    }

    render() {
        return (
            <div className="transferFunds">
                <form>
                    <label>Amount: </label>
                    <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                    <button onClick={this.onTransfer} >Transfer</button>
                </form>
            </div>
        )
    }
}
