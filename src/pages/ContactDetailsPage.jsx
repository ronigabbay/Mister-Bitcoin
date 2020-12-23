import React from 'react'
import { connect } from 'react-redux';
import ContactService from '../services/ContactService.js'
import { Link } from 'react-router-dom'
import TransferFund from '../cmps/TransferFund.jsx';
import { MovesList } from '../cmps/MovesList.jsx'
import UserService from '../services/UserService.js'
import { getById } from '../store/actions/contactActions';
import { loadUser, addMove } from '../store/actions/userAction'
import edit1 from '../assets/imgs/icons/edit1.png'
import back1 from '../assets/imgs/icons/back1.png'


class ContactDetailsPage extends React.Component {

    async componentDidMount() {
        const contact = await this.props.getById(this.props.match.params.id)
        // const user = UserService.getUser()
        await this.props.loadUser()
        // this.setState({ contact, user })
    }
    goBack = () => {
        this.props.history.push('/contact')
    }

    get userMoves() {
        const userMoves = this.props.user.moves
        const currUserMoves = userMoves.filter(move => move.toId === this.props.contact._id)
        return currUserMoves
    }

    render() {
        const { contact, user } = this.props
        if (!contact && user) return <h2>Loading...</h2>
        return (
            <div className="main-edit">
                <div className=" edit-btn-section flex space-between" >
                    <img src={back1} onClick={this.goBack} className="back-btn" />
                    <Link to={'/contact/edit/' + contact._id} className="edit-btn" > <img src={edit1} alt="" srcset="" /> </Link>
                </div>
                <div className="contact-details flex justify-center align-center col">
                    <h2>{contact.name} </h2>
                    <img className="contact-img" src={"https://robohash.org/" + contact._id + "?set=set5"} />
                    <h3>Phone: {contact.phone}</h3>
                    <TransferFund contact={contact} ></TransferFund>
                    {this.userMoves.length > 0 && <MovesList title="Your Moves" moveList={this.userMoves}  ></MovesList>}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);