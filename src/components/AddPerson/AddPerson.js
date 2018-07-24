import React, {Component} from 'react';

import './AddPerson.css';

class addPerson extends Component{
   state = {
     name:'',
     age: null
   }

   nameChangeHandler = event => {
       this.setState({
           name: event.target.value
       })
   }

   ageChangeHandler = event => {
        this.setState({
            age: event.target.value
        })
    }

    render(){
        return (
            <div className="AddPerson">
                <input onChange={ this.nameChangeHandler } type="text" placeholder="Name" value={this.state.name}/>
                <input onChange={ this.ageChangeHandler } type="number" placeholder="Age" value={this.state.age}/>
                <button onClick={ () => this.props.personAdded(this.state.name, this.state.age)  }>Add Person</button>
            </div>
        )
    }
};

export default addPerson;