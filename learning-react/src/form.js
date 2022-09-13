import React, { Component } from 'react'


handleChange = (event) => {
    const  { name, value } = event.target

    this.setState({
        [name]: value,
    })
}

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }


state = this.initialState


render() {
    const { name, job } = this.state;
}

}

export default Form;