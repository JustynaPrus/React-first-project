import React from 'react';
import '../styles/Contact.css';
import {Prompt} from 'react-router-dom';

class Contact extends React.Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
            this.setState({
                value: e.target.value,
            })
        }
    hadleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <div className='contact'>
                <h1>Napisz do nas</h1>
            <form onSubmit={this.hadleSubmit}>
                <textarea value={this.state.value} 
                onChange={this.handleChange} 
                placeholder='Wpisz wiadomość...'></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
            when={this.state.value}
            message='Formularz nie został wysłany. Czy na pewno chcesz opuścić stronę?'/>
            </div>
          );
    }
  }

  export default Contact;