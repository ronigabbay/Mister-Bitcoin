import React from 'react'
import { connect } from 'react-redux'
import ContactService from '../services/ContactService.js'
import { removeContact } from '../store/actions/contactActions';
import { addContact, getEmptyContact, updateContact } from '../store/actions/contactActions';
import { getById } from '../store/actions/contactActions';
import delete32 from '../assets/imgs/icons/delete32.png'
import save32 from '../assets/imgs/icons/save32.png'


class _ContactEdit extends React.Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);
        const contact = id ? await ContactService.getContactById(id) : await ContactService.getEmptyContact()
        if (contact) this.setState({ contact })
        else this.setState({ errMsg: 'Contact Not Found!' })
        // this.elInput.current.focus()
        // this.elInput.current.select()
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target === 'number' ? +ev.target.value : ev.target.value;
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }));
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        // await ContactService.saveContact({...this.state.contact})
        console.log('this.props.connect', this.props.contact);
        // await this.props.updateContact(this.props.contact)
        if (this.props.match.params) {
            await this.props.updateContact(this.state.contact)
        } else {
            await this.props.addContact(this.state.contact)
        }
        this.props.history.push('/contact')
    }

    onDeleteContact = async () => {
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id
        await this.props.removeContact(id)
        this.props.history.push('/contact')
    }


    render() {
        const { name, phone, email } = this.state.contact
        return (
            <div className="edit-container">
                <form className="edit-form flex align-center justify-center col " onSubmit={this.onSaveContact}>
                    <label className="edit-label" >Name:  </label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />

                    <label className="edit-label">Phone: </label>
                    <input type="number" name="phone" value={phone} onChange={this.handleChange} />

                    <label className="edit-label">Email: </label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    <div className="flex align-center">
                        {this.props.match.params.id && <img className="delete-img" src={delete32} alt="" srcset="" onClick={this.onDeleteContact} />}
                        <img onClick={this.onSaveContact} src={save32} className="save-img"/>
                        <button className="save-btn" > </button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = {
    removeContact,
    addContact,
    getById,
    getEmptyContact,
    updateContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)
