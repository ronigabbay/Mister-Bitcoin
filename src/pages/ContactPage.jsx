import { Link } from 'react-router-dom'
import React from 'react'
import ContactService from '../services/ContactService.js'
import { ContactList } from '../cmps/ContactList.jsx'
import { ContactFilter } from '../cmps/ContactFilter.jsx'
import { connect } from 'react-redux'
import { getContacts } from '../store/actions/contactActions';
import plus from '../assets/imgs/icons/plus.png'

 class _ContactPage extends React.Component {

    state = {
        filterBy: null,
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getContacts(this.state.filterBy)
    }

    onSetFilter = (filterBy) => {
        console.log('Filter Happend!', filterBy);
        this.setState({ filterBy }, () => {
            this.props.getContacts(this.state.filterBy)
        })
        
    }

    // async getContacts() {
    //     var contacts = await ContactService.getContacts(this.state.filterBy)
    //     const action = {
    //             type: 'SET_CONTACTS',
    //             contacts
    //           }
    //           this.props.dispatch(action)
    // }

    


    render() {
        const { contacts} = this.props
        return (
            <div className="contact-page flex col align-center" >
                <div className=" btn-section flex space-between align-center">
                    <Link className="add-btn" to={'/contact/edit'} ><img src={plus} /></Link>
                    {contacts  && <ContactFilter onSetFilter={this.onSetFilter} />}
                </div>
                {contacts  && <ContactList contacts={contacts} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      contacts: state.contactReducer.contacts
    }
  }
  const mapDispatchToProps = {
    getContacts
  }

  export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
