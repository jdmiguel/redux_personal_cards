import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        const { persons, onAddPersonHandler, onDeletePersonHandler, onNameChanged, onAgeChanged } = this.props;

        return (
            <div>
                <AddPerson personAdded={ onAddPersonHandler } />
                {persons.map( person => (
                    <Person 
                        key={ person.id }
                        name={ person.name } 
                        age={ person.age } 
                        clicked={ () => onDeletePersonHandler(person.id) }/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({ persons: state.persons })
const mapDispatchToProps = dispatch => ({
    onAddPersonHandler: (name,age) => dispatch({ type: actionTypes.ADD_PERSON, name:name, age:age}),
    onDeletePersonHandler: id => dispatch({ type: actionTypes.DELETE_PERSON, personId:id })
});

export default connect(mapStateToProps,mapDispatchToProps)(Persons);