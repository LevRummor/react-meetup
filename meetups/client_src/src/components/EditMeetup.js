import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditMeetup extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            city: '',
            address: ''
        }
    }

    componentWillMount(){
        this.getMeetupDetails()
    }

    getMeetupDetails(){
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                city: response.data.city,
                address: response.data.address
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editMeetup(newMeetup){
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/meetups/${this.state.id}`,
            data: newMeetup
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

    onSubmit(e){
        e.preventDefault();
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.city.value
        }
        this.editMeetup(newMeetup)
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render(){
        return(
            <div className="edit-form">
                <br/>
                <div className='btn-back'>
                    <Link to="/"><i className="fa fa-share" style={{'transform':'rotate(180deg)', 'marginRight':'10px'}}></i>Go Back</Link>
                </div>
                <hr/>                
                <h1>Edit Meetup:</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-field">
                            <input type="text" name="name" ref="name" onChange={this.handleInputChange.bind(this)} value={this.state.name}/>
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="city" ref="city" onChange={this.handleInputChange.bind(this)} value={this.state.city}/>
                            <label htmlFor="city">City:</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="address" ref="address" onChange={this.handleInputChange.bind(this)} value={this.state.address}/>
                            <label htmlFor="address">Address:</label>
                        </div>
                        <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }    
}