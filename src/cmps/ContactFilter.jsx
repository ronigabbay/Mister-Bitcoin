import React from 'react'
export class ContactFilter extends React.Component {
    state = {
        name: '',
        phone: ''
    }

    onChangeHandler = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === "number" ? +ev.target.value : ev.target.value
        this.setState({ [field]: value }, () => {
            this.props.onSetFilter({ ...this.state })
        })
    }

    render() {
        const { name, phone} = this.state
        return <form className="contact-filter">
            <label htmlFor=""></label>
            <input name="name" value={ name } type="name" placeholder="Search" onChange={ this.onChangeHandler } />
            {/* <label htmlFor=""> Phone: </label> */}
            {/* <input name="phone" value={ phone } type="number" placeholder="Enter Phone Number" onChange={ this.onChangeHandler } /> */}
        </form>
    }
}

