import React from 'react'
import UserService from '../services/UserService.js'
import { addUser } from '../store/actions/userAction'
import { connect } from 'react-redux';
import bitcoin from '../assets/imgs/icons/bitcoin.png'

class SingupPage extends React.Component {
    state= {
        user: {
            name:''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value =  ev.target.value;
        this.setState(({user}) => ({user: {...user, [field]: value}}));
    }

    onSignup = (ev) => {
        ev.preventDefault()
        this.props.addUser(this.state.user.name)
        // UserService.signup(this.state.user.name);
        this.props.history.push('/contact')
    
    }

    render() {
        const {name} = this.state
        return (
            <form className="signUp-form align-center justify-center flex col">
                <img src={bitcoin} />
                <label className="signup-label" htmlFor="name">Please entar your name</label>
                <input type="text" name="name" value={name} placeholder="Enter Your Name" onChange={this.handleChange}/>
                <button className="signup-btn" onClick={this.onSignup} >Sign Up</button>
            </form> 
        )
    }
}

const mapDispatchToProps = {
    addUser
};

// export const SingupPage = connect(null, mapDispatchToProps)(_SingupPage)
export default connect(null, mapDispatchToProps)(SingupPage);