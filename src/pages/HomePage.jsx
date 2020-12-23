
import React from 'react'
import { connect } from 'react-redux';
import UserService from '../services/UserService.js'
import BitcoinService from '../services/BitcoinService.js'
import { MovesList } from '../cmps/MovesList.jsx'
import { getById } from '../store/actions/contactActions';
import { loadUser, addMove } from '../store/actions/userAction'
import bitcoin from '../assets/imgs/img/bitcoin.jpg'
import {Redirect} from 'react-router-dom'


class HomePage extends React.Component {
    state = {
        bitcoinRate: null
    }

    componentDidMount() {
        console.log("props", this.props);
        // if (this.props.user) {
        //     console.log('no user!');
        //     this.props.history.push('/signup');
        //     return;
        // }
        this.getUser()
        this.getRate()
    }

    async getUser() {
        // var user = await UserService.getUser()
        // if (this.props.user) {
        //     console.log('no user!');
        //     this.props.history.push('/signup');
        //     return;
        // }
        await this.props.loadUser()
    }
    async getRate() {
        var bitcoinRate = await BitcoinService.getRate(1)
        this.setState({ bitcoinRate })
    }

    get userMoves() {
        // const user = UserService.getUser()
        const user = this.props.user
        const lastMoves = []
        for (var i = 0; i < user.moves.length; i++) {
            lastMoves.push(user.moves[i])
            if (lastMoves.length > 2) return lastMoves
        }
        return lastMoves
    }
    props
    render() {
        const {user}=this.props
        if(!user) return <Redirect to='/signup'/>
        return (
            <div className="homePage flex align-center col" >
                <div className="user-details" >
                    {this.props.user && <div>  <h1><img src={this.props.user.imgUrl} /> Hello {this.props.user.name}</h1>  <h3>Your Coins: {this.props.user.coins}</h3></div>}
                    {this.state.bitcoinRate && <h3> Bitcoin USD Rate: {this.state.bitcoinRate} </h3>}
                </div>
                {this.userMoves && <MovesList title="Your Last Moves" moveList={this.userMoves}></MovesList>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contact: state.contactReducer.currContact,
        user: state.userReducer.user
    };
};

const mapDispatchToProps = {
    getById,
    loadUser,
    addMove
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);