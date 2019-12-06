import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import uuid from 'uuid'
import './component.css'

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            completed: false
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div >
                <div className='header'>
                <h1>To-Do App!</h1>
    <label > Add New To-Do  </label>
                <input type='text' onChange={this.handleChange} />
                <button className='button-add' onClick={() => this.props.add({...this.state, id: uuid()})}>ADD</button>
                </div>
            <div className='title' >
            <h1 >Let's get some work done </h1> 
            </div>
            </div>
        )
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        add: text => dispatch(addTodo(text))
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Input)